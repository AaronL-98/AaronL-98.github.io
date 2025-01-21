---
title: "Jekyll Setup and Layout Conversion"
date: 2024-10-10 
project: "portfolio_site"
---

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
