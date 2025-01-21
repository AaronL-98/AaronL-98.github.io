---
layout: project
project_id: portfolio_site
title: "portfolio"
description: "A Jekyll-based portfolio for showcasing projects."
# image: "/assets/images/projectA-thumbnail.png"
---

# Portfolio Project Overview

The **Portfolio Project** is a web-based portfolio designed to showcase skills in **Development and Testing** using GitHub Pages. The portfolio includes an organized file structure to manage content effectively as it scales and incorporates a devlog page for ongoing updates. The project features responsive styling, a dark-themed color scheme, and specific pages for project showcases, contact information, and a developer log (devlog) to document the development journey and future updates.

---

## Project Objectives

- **Clear and Scalable Structure**: Ensuring the root folder remains organized by using a structured directory system for content, stylesheets, scripts, and testing frameworks.  
- **Responsive Layout**: A mobile-friendly design with three main columns, centralized content, and hover effects for an engaging user experience.  
- **Devlog Integration**: Regular Markdown-based devlog posts to track project updates and display progress, allowing visitors to explore current and past projects.  
- **Testing Frameworks**: Setting up directories for web and API testing scripts, configurations, and utility functions to streamline test management.  

---

## Key Components

- **File Organization**  
  - Organized with `src/` for main website files, `devlog/` for Markdown entries, and `tests/` for separate web and API testing frameworks.  
  - Assets (images, videos, etc.) are in `src/assets/`, while CSS and JavaScript files are in `src/styles/` and `src/scripts/`, respectively.

- **Responsive Design**  
  - Implemented a header-body-footer layout, with a central column and left column for devlog highlights.  
  - Dark color scheme with purple hover effects on buttons for a modern look.

- **Devlog Management**  
  - The devlog files are written in Markdown and sorted by project or date.  
  - A dedicated devlog page lists posts and provides overlays or detail views for each project’s updates.

- **CI/CD Pipeline**  
  - Plans to automate site builds and tests using GitHub Actions.  
  - The pipeline will run on a `dev` branch for previews and merge into `main` for the public release.

---

## Devlog Page

The **Devlog Page** is structured to display updates on current and past projects. The left column features the current project and a chronological list of devlog posts. The central column includes a clickable list of projects, with each entry displaying an overlay of details and devlog entries for that project.

- **Markdown-Based Posts**: Each devlog entry is stored in a Markdown file under the `_devlogs/` directory, making it easy to add or modify updates.  
- **Ascending Order**: Devlogs are listed in ascending order of their post date, and each update highlights key milestones in development.

---

## Development Workflow

1. **Initial Setup**  
   Organized the file structure and created main HTML files for `index`, `projects`, `contact`, and `devlog`.  

2. **Responsive Layout & Styling**  
   Applied CSS for a responsive, dark-themed design with hover effects.  

3. **Devlog Creation**  
   Set up the devlog page to display project updates in Markdown format for easy management and integration.  

4. **Testing Frameworks**  
   Added web and API testing directories to ensure site stability and allow for future expansion.

5. **Deployment**  
   Deployed the site on GitHub Pages, tested each page, and confirmed that the site was live.

---

## High-Level Summary

This portfolio leverages GitHub Pages and (optionally) Jekyll to simplify adding new content. By maintaining separate folders for projects, devlogs, and tests, the site can be continuously expanded without cluttering the root. The dark-themed aesthetic is consistent across pages, while Markdown files power the devlog for streamlined updates.

---

## Future Plans

- **Automated Testing**: Integrate Selenium/Cypress (web) and Postman/REST-assured (API) tests to ensure site functionality and reliability.  
- **Playable Game Demos**: Host demos on itch.io or cloud platforms (AWS/Azure) and embed or link them directly into project pages.  
- **Potential Framework Migration**: If more dynamic features (e.g., user authentication, real-time interactions) are needed, consider transitioning to a framework like Next.js or another static/dynamic hybrid.

---

With this project, I aim to provide a **professional**, **organized** display of my development skills and document ongoing work on various projects in the devlog. As the site evolves, these objectives and components will guide expansions and enhancements—ensuring both technical scalability and a great user experience.

