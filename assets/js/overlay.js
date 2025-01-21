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
  // Fetch project data from the HTML
  const projectElement = document.querySelector(`[data-project-id="${projectId}"]`);
  if (projectElement) {
    const title = projectElement.querySelector('h2').textContent;
    const description = projectElement.querySelector('p').textContent;
    document.getElementById('overlay-title').textContent = title;
    document.getElementById('overlay-description').textContent = description;
  } else {
    document.getElementById('overlay-title').textContent = 'Project not found';
    document.getElementById('overlay-description').textContent = '';
  }
}

function fetchProjectLogs(projectId) {
  const logsContainer = document.getElementById('overlay-logs');
  logsContainer.innerHTML = "Loading logs...";

  // Fetch logs from the server
  fetch(`/logs/${projectId}/index.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(logs => {
      if (logs.length > 0) {
        logsContainer.innerHTML = logs.map(log => `
          <article class="log-entry">
            <h4>${log.date}</h4>
            <p>${log.content}</p>
          </article>
        `).join("");
      } else {
        logsContainer.innerHTML = "No logs found.";
      }
    })
    .catch(error => {
      console.error('Error fetching logs:', error);
      logsContainer.innerHTML = "Error loading logs.";
    });
}

// Example mock project data:
const mockProjects = [
  {
    project_id: "portfolio_site",
    title: "Portfolio Site",
    description: "A Jekyll-based portfolio for showcasing projects."
  }
];
