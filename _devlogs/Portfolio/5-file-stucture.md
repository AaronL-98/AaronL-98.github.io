# Rework File Structure
**Date**: November 8, 2024

## Summary
Updated the File structure to follow file structurebelow. Done in preperation for the adding content to the pages, along with adding new feature to maintain readability. 

root/
├── src/                          # Main source folder for the website files
│   ├── index.html                # Main homepage file
│   ├── projects.html             # Projects page
│   ├── contact.html              # Contact page
│   ├── devlog.html               # Devlog main page
│   ├── assets/                   # Assets folder for all images, videos, and other media
│   │   ├── images/               # Sub-folder for images
│   │   ├── videos/               # Sub-folder for embedded video files
│   └── styles/                   # All CSS files
│       ├── global.css            # Global styles shared across pages
│       ├── devlog.css            # Specific styles for the devlog page
│       ├── projects.css          # Specific styles for the projects page
│       └── other-page-specific.css # Other page-specific styles
│
├── devlog/                       # Folder for devlog content (Markdown files)
│   ├── 2024-11-05-update.md      # Devlog post example
│   ├── 2024-11-01-project-overview.md
│   └── (additional devlog posts)
│
├── scripts/                      # JavaScript files for functionality
│   ├── main.js                   # General scripts for the website
│   ├── devlog.js                 # Devlog-specific scripts
│   └── overlay.js                # Overlay and modal handling scripts
│
└── README.md                     # Main repository README


## Key Highlights
- **Modularity and Scalability**: Files are organized by functionality, making it easier to locate and manage specific parts of the project.
- **Scalability**: Help provide a foundation to expand into testing, pages, scripts, and adding content to the site entries without cluttering the root
- **Readability**: Make each directory have a clear purpose, improving readability.

## Next Steps
- Begin adding content to `index`, `contact`, and `devlog` pages.
- Sort and add `'old'`/ pre-existing work to `projects` page for people to view