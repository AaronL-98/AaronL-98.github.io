// overlay.js

function openOverlay(projectId) {
  // Show overlay
  const overlay = document.getElementById('project-overlay');
  overlay.style.display = 'flex';

  // Reset content first
  document.getElementById('overlay-title').textContent = 'Loading...';
  document.getElementById('overlay-description').textContent = '';
  document.getElementById('overlay-logs').textContent = 'Loading logs...';

  // Fetch project data
  fetchProjectMeta(projectId);
  fetchProjectLogs(projectId);
}

function closeOverlay() {
  document.getElementById('project-overlay').style.display = 'none';
}

function fetchProjectMeta(projectId) {
  // Example project data for demonstration purposes
  const project = mockProjects.find(p => p.project_id === projectId);
  if (project) {
    document.getElementById('overlay-title').textContent = project.title;
    document.getElementById('overlay-description').textContent = project.description;
  } else {
    document.getElementById('overlay-title').textContent = 'Project not found';
    document.getElementById('overlay-description').textContent = '';
  }
}

function fetchProjectLogs(projectId) {
  const logsContainer = document.getElementById('overlay-logs');
  const projectLogs = document.getElementById(`logs-${projectId}`);
  if (projectLogs) {
    logsContainer.innerHTML = projectLogs.innerHTML;
  } else {
    logsContainer.innerHTML = "No logs found.";
  }
}

// Example mock project data:
const mockProjects = [
  {
    project_id: "portfolio_site",
    title: "Portfolio Site",
    description: "A Jekyll-based portfolio for showcasing projects."
  }
];
