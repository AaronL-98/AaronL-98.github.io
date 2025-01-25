// fetch-notion-projects.js

require('dotenv').config();
const { Client } = require('@notionhq/client');
const fs = require('fs');
const path = require('path');

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const PROJECTS_DB_ID = process.env.PROJECTS_DB_ID;

async function fetchProjects() {
  try {
    const response = await notion.databases.query({
      database_id: PROJECTS_DB_ID,
    });
    
    const results = response.results;
    console.log(`Fetched ${results.length} projects from Notion.`);

    const projectsDir = path.join(__dirname, '..', '_projects');
    if (!fs.existsSync(projectsDir)) {
      fs.mkdirSync(projectsDir);
    } else {
      fs.readdirSync(projectsDir).forEach(file => {
        fs.unlinkSync(path.join(projectsDir, file));
      });
    }

    for (const page of results) {
      const titleProp = page.properties.Name;
      const descProp = page.properties.Description;
      const slug = titleProp.title[0]?.plain_text
        .replace(/[^a-z0-9]+/gi, '-')
        .toLowerCase() || page.id;
      const projectName = titleProp.title[0]?.plain_text || "Untitled Project";
      const description = descProp?.rich_text[0]?.plain_text || "No description";
      
      const frontMatter = 
`---
title: "${projectName}"
description: "${description}"
notion_id: "${page.id}"
date: "${new Date().toISOString()}" 
layout: "project"
---
`;

      const content = frontMatter + "\n" + `This project was imported from Notion.\n`;

      const filename = `${slug}.md`;
      fs.writeFileSync(path.join(projectsDir, filename), content);
      console.log(`Wrote project: ${filename}`);
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

fetchProjects();