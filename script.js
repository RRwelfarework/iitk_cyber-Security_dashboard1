document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const root = document.documentElement;
  
    // Toggle Dark/Light Theme
    themeToggle.addEventListener("click", () => {
      if (root.style.getPropertyValue("--primary-bg") === "#ffffff") {
        setDarkTheme();
      } else {
        setLightTheme();
      }
    });
  
    function setDarkTheme() {
      root.style.setProperty("--primary-bg", "#1e1e2e");
      root.style.setProperty("--text-color", "#ffffff");
      root.style.setProperty("--widget-bg", "#2e2e3e");
    }
  
    function setLightTheme() {
      root.style.setProperty("--primary-bg", "#ffffff");
      root.style.setProperty("--text-color", "#000000");
      root.style.setProperty("--widget-bg", "#e0e0e0");
    }
  
    // Threat Map Simulation (Placeholder)
    const canvas = document.getElementById("threatMap");
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 200;
  
    function drawMap() {
      ctx.fillStyle = "#4caf50";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "20px Arial";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("Threat Map Placeholder", 50, 100);
    }
  
    drawMap();
  });
  

