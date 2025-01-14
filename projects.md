---
layout: default
title: "Projects"
---

# Projects

Below is a list of my current and past game development projects:

{% for project in site.projects %}
- [{{ project.title }}]({{ project.url }})
{% endfor %}
