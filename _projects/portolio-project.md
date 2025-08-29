---
layout: project_overview
css: "/assets/css/project-overview.css"
title: "Portfolio Website"
description: "A Jekyll-based portfolio website to showcase my projects and skills."
technologies: ["Jekyll", "HTML", "CSS", "GitHub Actions"]
category: "Personal Project"
date: "2024-12-01"
repo: "https://github.com/AaronL-98/AaronL-98.github.io"
demo: "https://aaronl-98.github.io/" # Optional
image: "/assets/images/project-name.jpg" # Optional
---

## Overview
This project is a personal portfolio website built using Jekyll, a static site generator. The website is designed to showcase my projects, skills, and experience in a professional manner. It includes sections for my projects, contact information, and an about me page.

## Features
- Responsive design for optimal viewing on different devices.
- Project pages with detailed descriptions and links to demos and repositories.
- Contact form for visitors to get in touch.
- Automated deployment using GitHub Actions.

## Technologies Used
- **Jekyll**: Static site generator used to build the website.
- **HTML**: Markup language for structuring the content.
- **CSS**: Styling the website to make it visually appealing.
- **GitHub Actions**: Automating the deployment process.

## Links
- 📂 [GitHub Repository]({{ page.repo }})
{% if page.demo %}
- 🎮 [Live Demo]({{ page.demo }})
{% endif %}