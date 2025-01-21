---
title: "File Structure and Repo Organisation"
date: 2024-10-05 
project: "portfolio_site"
---

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
