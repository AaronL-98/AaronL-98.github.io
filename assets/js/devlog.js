// devlog.js

function openOverlay(projectData) {
  const overlay = document.getElementById('project-overlay');
  const title = document.getElementById('overlay-title');
  const desc = document.getElementById('overlay-description');

  title.textContent = projectData.title;
  desc.textContent = projectData.description;
  
  overlay.style.display = 'flex';
}

function closeOverlay() {
  document.getElementById('project-overlay').style.display = 'none';
}
