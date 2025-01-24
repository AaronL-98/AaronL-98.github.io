/**
 * scripts/fetch-notion-projects.js
 * 
 * Usage: 
 * 1) Add NOTION_TOKEN and PROJECTS_DB_ID to .env
 * 2) run `node scripts/fetch-notion-projects.js`
 */

require('dotenv').config();
const { Client } = require('@notionhq/client');
const fs = require('fs');
const path = require('path');

/**
 * Environment variables:
 * - NOTION_TOKEN: Your internal integration token from Notion
 * - PROJECTS_DB_ID: The ID of the Notion database holding your projects
 * https://www.notion.so/aaron-lewis-portfolio/Projects-18261eb4a21180bb88acde97ed79fa74?pvs=4
 */
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const PROJECTS_DB_ID = process.env.PROJECTS_DB_ID;

async function fetchProjects() {
  try {
    // Query the Notion database for all project entries
    const response = await notion.databases.query({
      database_id: PROJECTS_DB_ID,
      // Optional filter, sorts, etc.
    });
    
    const results = response.results;
    console.log(`Fetched ${results.length} projects from Notion.`);

    // Clear out old files in _projects
    const projectsDir = path.join(__dirname, '..', '_projects');
    if (!fs.existsSync(projectsDir)) {
      fs.mkdirSync(projectsDir);
    } else {
      // remove existing files if you want a fresh start each time
      fs.readdirSync(projectsDir).forEach(file => {
        fs.unlinkSync(path.join(projectsDir, file));
      });
    }

    for (const page of results) {
      // Extract data from the Notion page properties
      const titleProp = page.properties.Name; // Adjust based on your DB
      const descProp = page.properties.Description; // e.g., text or rich_text
      const slug = titleProp.title[0]?.plain_text
        .replace(/[^a-z0-9]+/gi, '-')
        .toLowerCase() || page.id;
      const projectName = titleProp.title[0]?.plain_text || "Untitled Project";
      const description = descProp?.rich_text[0]?.plain_text || "No description";
      
      // Optional: fetch blocks for more detail
      // const blocks = await fetchPageBlocks(page.id); 
      // const extraContent = blocksToMarkdown(blocks);

      // Create front matter
      const frontMatter = 
`---
title: "${projectName}"
description: "${description}"
notion_id: "${page.id}"
date: "${new Date().toISOString()}" 
layout: "project"
---
`;

      // In this example, the content is minimal
      // If you want more content, embed it after front matter
      const content = frontMatter + "\n" + `This project was imported from Notion.\n`;

      // Write file to _projects/<slug>.md
      const filename = `${slug}.md`;
      fs.writeFileSync(path.join(projectsDir, filename), content);
      console.log(`Wrote project: ${filename}`);
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

fetchProjects();
