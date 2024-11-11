// devlog.js

// Function to open the overlay with specific project details
function openOverlay(projectId) {
    // Here you would load project details dynamically based on projectId
    document.getElementById("project-overlay").style.display = "flex";
  }
  
  // Function to close the overlay
  function closeOverlay() {
    document.getElementById("project-overlay").style.display = "none";
  }
  
  // Add event listeners to project links
  document.querySelectorAll(".project-link").forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const projectId = event.target.getAttribute("data-project");
      openOverlay(projectId);
    });
  });
  