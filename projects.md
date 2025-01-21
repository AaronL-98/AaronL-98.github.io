---
layout: project
project_id: projects_page
title: "projects"
---

# Projects

### Projects

- Portfolio
    - **Project Overview**
        
        ### Portfolio Project Overview
        
        The **Portfolio Project** is a web-based portfolio designed to showcase skills in **Development and Testing** using GitHub Pages. The portfolio includes an organized file structure to manage content effectively as it scales and incorporates a devlog page for ongoing updates. The project features responsive styling, a dark-themed color scheme, and specific pages for project showcases, contact information, and a developer log (devlog) to document the development journey and future updates.
        
    - **Project Objectives**
        
        ### Project Objectives
        
        - **Clear and Scalable Structure**: Ensuring the root folder remains organized by using a structured directory system for content, stylesheets, scripts, and testing frameworks.
        - **Responsive Layout**: A mobile-friendly design with three main columns, centralized content, and hover effects for an engaging user experience.
        - **Devlog Integration**: Regular Markdown-based devlog posts to track project updates and display progress, allowing visitors to explore current and past projects.
        - **Testing Frameworks**: Setting up directories for web and API testing scripts, configurations, and utility functions to streamline test management.
    - Concepts
        
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
    - Technologies
    - Future Development
        
        ### Future Plans
        
        - **Automated Testing**: Integrate Selenium/Cypress (web) and Postman/REST-assured (API) tests to ensure site functionality and reliability.
        - **Playable Game Demos**: Host demos on itch.io or cloud platforms (AWS/Azure) and embed or link them directly into project pages.
        - **Potential Framework Migration**: If more dynamic features (e.g., user authentication, real-time interactions) are needed, consider transitioning to a framework like Next.js or another static/dynamic hybrid.
    - Logs
        - 1-InitialSetup-log
            
            ## Summary
            
            Today, I set up the basic structure for my portfolio, including essential HTML files and a GitHub Pages configuration.
            
            ## Key Highlights
            
            - **Creation**: Created GitHub repository and configured GitHub Pages.
            - **Development Goals**: Get started, begin building my portfolio, and research best ways to highlight my skillset.
            
            ## Next Steps
            
            - Begin creating the main pages: `index`, `projects`, and `contact`.
            - Start designing the color scheme and layout for a cohesive look and feel.
        - 2-PageStructure-log
            
            # Page Structure and Navigation
            
            **Date**: September 22, 2024
            
            ## Summary
            
            I created the main HTML files and established a simple navigation structure. The pages (`index`, `projects`, `contact`, and `devlog`) are now linked via a consistent header menu.
            
            ## Key Highlights
            
            - **Navigation**: A global header to link all core pages.
            - **Footer**: Basic footer layout for essential site info (e.g., copyright).
            - **Responsiveness**: Laid out columns using basic CSS flex properties to ensure a mobile-friendly site.
            
            ## Next Steps
            
            - Develop a dark-themed color scheme (black/dark gray background, white text, purple hovers).
            - Add initial project details to `projects` and a placeholder contact form on `contact`.
        - 3-LayoutColourScheme-log
            
            # Layout and Color Scheme
            
            **Date**: September 25, 2024
            
            ## Summary
            
            I implemented a three-column layout for certain pages (especially the devlog) and finalized a dark color scheme with purple accents.
            
            ## Key Highlights
            
            - **Color Palette**: Black/dark gray background, white text, and purple (`#bb86fc`) hover effects.
            - **Three-Column Structure**: Devlog page now has a left column (for current project highlights), a central column (for project lists or devlog links), and room for an optional right column.
            - **Global Styles**: Created a `global.css` file to house universal styles, ensuring each page maintains a cohesive look.
            
            ## Next Steps
            
            - Introduce a Markdown-based devlog system to simplify posting updates.
            - Investigate using Jekyll to manage content and generate pages automatically.
        - 4-DevlogFeature-log
            
            # Adding the Devlog Feature
            
            **Date**: October 1, 2024
            
            ## Summary
            
            I created a dedicated devlog page where updates are listed in ascending order. The structure allows me to write devlog entries in Markdown, so I can focus on content rather than manual HTML edits.
            
            ## Key Highlights
            
            - **Devlog Page**: Set up a page that displays new posts for ongoing projects, enabling quick project updates.
            - **Markdown Integration**: Preliminary testing of writing devlog posts in `.md` files for faster updates.
            - **Preview Branch**: Created a `dev` branch to test new changes before merging to `main`.
            
            ## Next Steps
            
            - Transition to Jekyll for automated page generation, so each devlog entry can be a Markdown file in a `_devlogs/` folder.
            - Add a CI/CD pipeline using GitHub Actions to build and preview changes in `dev`.
        - 5-FileStucture-log
            
            # File Structure and Repository Organisation
            
            **Date**: October 5, 2024
            
            ## Summary
            
            I reorganized the repository to prevent root clutter. This includes separating HTML files into `src/`, CSS in `assets/css/`, scripts in `assets/js/`, and devlogs in `_devlogs/`.
            
            ## Key Highlights
            
            - **Directory Separation**:
                - `src/` for main pages (`index.html`, `projects.html`, etc.).
                - `assets/` for styling (`css`) and functionality (`js`).
                - `_devlogs/` for Markdown-based updates on each project.
            - **Testing Folders**: Setup `tests/web-tests/` and `tests/api-tests/` for future expansions into automated testing.
            - **Branching Strategy**: Using `dev` for previews and `main` for production on GitHub Pages.
            
            ## Next Steps
            
            - Implement Jekyll fully, converting HTML pages into layouts and partials (`_layouts/`, `_includes/`).
            - Establish a basic GitHub Actions workflow to build the Jekyll site.
        - 6-JekyllSetup-log
            
            # Jekyll Setup and Layout Conversion
            
            **Date**: October 10, 2024
            
            ## Summary
            
            I migrated the site to Jekyll, leveraging `_config.yml` for site settings and creating `_layouts/` for `default`, `index`, `project`, and `devlog`. Markdown files now generate pages automatically.
            
            ## Key Highlights
            
            - **Jekyll Configuration**: `_config.yml` file includes site details, permalink settings, and collections for `projects` and `devlogs`.
            - **Layouts**:
                - `default.html` provides a base with global header, footer, and styles.
                - `devlog.html` automatically lists devlog entries from `_devlogs/`.
                - `project.html` handles individual project details from `_projects/`.
            - **Markdown Conversion**: The devlogs moved into `_devlogs/Portfolio/` for the portfolio updates, and `_devlogs/MrBlocks2DGame/` for the game-specific logs.
            
            ## Next Steps
            
            - Set up a GitHub Actions pipeline to build the Jekyll site on `dev` for previews.
            - Prepare to integrate web testing frameworks in the `tests` directory.
        - 7-GithubActions-log
            
            # GitHub Actions and CI/CD Pipeline
            
            **Date**: October 15, 2024
            
            ## Summary
            
            I introduced a GitHub Actions workflow to automate building the Jekyll site from the `dev` branch. It checks for syntax errors and ensures the site compiles correctly, providing a preview link before merging to `main`.
            
            ## Key Highlights
            
            - **Workflow File**: Added `.github/workflows/static.yml` to run `jekyll build` on pushes to `dev`.
            - **Automatic Preview**: The action uploads the `_site` directory (build output) to GitHub Pages for a dev preview.
            - **Future Testing Hooks**: Laid groundwork to add additional test steps for web or API tests once they are configured.
            
            ## Next Steps
            
            - Begin adding basic web tests (e.g., link validation, Lighthouse audits).
            - Incorporate final style touches and see if the site is stable for Phase One completion.
        - 8-JekyllRebuild-log
            
            # Jekyll Rebuild
            
            **Date**: January 1, 2025
            
            ## Summary
            
            Rebuild of the portfolio site to remove Visual bugs, optimise for jekyll build sequence, fix developer logs not displaying.
            
            ## Key Highlights
            
            ## Next Steps
            
            - Begin adding basic web tests (e.g., link validation, Lighthouse audits).
            - Incorporate final style touches and see if the site is stable for Phase One completion.
- 

- MrBlocks2DGame
    - **Project Overview**
        
        ### MrBlocks2DGames Overview
        
        MrBlocks2D Game is a puzzle-platformer featuring unique block mechanics…
        
- **Project Objectives**
- Concepts
- Technologies
- Future Development
- Logs
    - 1-InitialSetup-log