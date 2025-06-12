// Add windows to buildings
function createWindows() {
  const buildings = document.querySelectorAll(".building");
  buildings.forEach((building, index) => {
    const buildingHeight = parseInt(getComputedStyle(building).height);
    const buildingWidth = parseInt(getComputedStyle(building).width);
    const windowsPerRow = Math.floor(buildingWidth / 15);
    const rows = Math.floor(buildingHeight / 20);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < windowsPerRow; col++) {
        if (Math.random() > 0.3) {
          // Not all windows should be lit
          const window = document.createElement("div");
          window.className = "window";
          window.style.left = col * 15 + 5 + "px";
          window.style.top = row * 20 + 10 + "px";
          window.style.animationDelay = Math.random() * 3 + "s";
          building.appendChild(window);
        }
      }
    }
  });
}

// Add energy particles
function createParticles() {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 8 + "s";
    particle.style.animationDuration = Math.random() * 4 + 6 + "s";
    document.querySelector(".city-container").appendChild(particle);
  }
}

// Click effect
function addClickEffect(e) {
  const effect = document.createElement("div");
  effect.className = "click-effect";
  effect.style.left = e.clientX - 10 + "px";
  effect.style.top = e.clientY - 10 + "px";
  document.body.appendChild(effect);

  setTimeout(() => {
    document.body.removeChild(effect);
  }, 600);
}

// Pulse explosion
function addExplosion() {
  const ripples = document.querySelectorAll(".ripple");
  ripples.forEach((ripple, index) => {
    ripple.style.animation = "none";
    setTimeout(() => {
      ripple.style.animation = "rippleExpand 2s ease-out";
    }, index * 200);
  });
}

// Event listeners
document.addEventListener("click", addClickEffect);

// Initial setup
window.addEventListener("load", () => {
  createWindows();
  createParticles();
});

// Dynamic color change
setInterval(() => {
  const buildings = document.querySelectorAll(".building");
  buildings.forEach((building) => {
    const hue = Math.random() * 60 + 180; // Blue to purple
    building.style.filter = `hue-rotate(${hue}deg)`;
  });
}, 5000);
