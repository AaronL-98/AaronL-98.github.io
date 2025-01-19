function openOverlay(projectId) {
  const overlay = document.getElementById('project-overlay');
  overlay.style.display = 'flex';
  
  // 1) Update overlay title & desc from the grid item
  //    (You could store data attributes on the .grid-item)
  document.getElementById('overlay-title').innerText = "Loading...";
  document.getElementById('overlay-description').innerText = "";
  
  // 2) Grab the hidden logs div
  const logsDiv = document.querySelector(`.logs-for-${projectId}`);
  document.getElementById('overlay-logs').innerHTML = logsDiv.innerHTML;
}

function closeOverlay() {
  document.getElementById('project-overlay').style.display = 'none';
}
