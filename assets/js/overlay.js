// overlay.js

function openOverlay(projectId) {
  // Show overlay
  const overlay = document.getElementById('project-overlay');
  overlay.style.display = 'flex';

  // Reset content first
  document.getElementById('overlay-title').textContent = 'Loading...';
  document.getElementById('overlay-description').textContent = '';
  document.getElementById('overlay-logs').textContent = 'Loading logs...';

  // Fetch project data from site.projects inlined or handle via front matter
  // For simplicity, we'll fetch partial info from a global JS object or do AJAX:
  fetchProjectMeta(projectId);
  fetchProjectLogs(projectId);
}

function closeOverlay() {
  document.getElementById('project-overlay').style.display = 'none';
}

function fetchProjectMeta(projectId) {
  // Minimal example: if you store front matter in site.projects,
  // you could do an AJAX request to a JSON endpoint, or embed the data in a <script> tag.
  // Here, let's assume you have an inline JSON object:
  const project = window.ALL_PROJECTS.find(p => p.project_id === projectId);
  if (project) {
    document.getElementById('overlay-title').textContent = project.title;
    document.getElementById('overlay-description').textContent = project.description;
  }
}

// Example logs approach: read raw .md files from /logs/PROJECT_ID/*.md
// This can be done with an AJAX request, but GitHub Pages won't serve raw directory listings by default.
// So you might:
function fetchProjectLogs(projectId) {
  const logsContainer = document.getElementById('overlay-logs');
  logsContainer.innerHTML = "No logs found.";

  // 1) If your logs are accessible as raw .md or .json, you'd fetch them here.
  // 2) Or store logs in Jekyll data files (/ _data / projectId / logs.yml).
  // 3) Or build a precompiled index. 
  // 
  // The simplest approach: build an index page for each project. 
  // For demonstration:
  const logs = mockLogs[projectId] || [];
  if (logs.length > 0) {
    logsContainer.innerHTML = logs.map(log => `
      <article class="log-entry">
        <h4>${log.date}</h4>
        <p>${log.content}</p>
      </article>
    `).join("");
  }
}

// Example mock logs data:
const mockLogs = {
  "projectA": [
    { date: "2024-01-01", content: "Initial log for Project A" },
    { date: "2024-01-02", content: "Second log: progress on AI" }
  ],
  "projectB": [
    { date: "2024-02-10", content: "Project B initial setup" }
  ]
};
