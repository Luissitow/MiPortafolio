const screenWidth = window.innerWidth;

let particlesCount = 60;
let particleSize = 3;

if (screenWidth < 768) {
  particlesCount = 30;
  particleSize = 2;
} else if (screenWidth < 480) {
  particlesCount = 20;
  particleSize = 1.5;
}

particlesJS("particles-js", {
  particles: {
    number: { value: particlesCount },
    color: { value: "#fefefe" },
    shape: { type: "circle" },
    opacity: { value: 0.2 },
    size: { value: particleSize },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#fefefe",
      opacity: 0.2,
      width: 1,
    },
    move: { enable: true, speed: 1 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      resize: true
    }
  },
  retina_detect: true
});
