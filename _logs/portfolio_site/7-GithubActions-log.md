---
title: "GitHub Actions and CI/CD Pipeline"
date: 2024-10-15 
project: "portfolio_site"
---

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
