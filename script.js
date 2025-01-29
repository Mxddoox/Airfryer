// GSAP Animations
gsap.from("header", { duration: 1, y: -50, opacity: 0 });
gsap.from("#hero h2", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
gsap.from("#hero p", { duration: 1, y: 50, opacity: 0, delay: 0.7 });
gsap.from("#hero button", { duration: 1, y: 50, opacity: 0, delay: 0.9 });

// Three.js 3D Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("3d-animation") });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xff6f61 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Chart.js Token Metrics
const ctx = document.getElementById("tokenChart").getContext("2d");
const tokenChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "AirFryer Token Price",
      data: [0.1, 0.15, 0.2, 0.25, 0.3, 0.35],
      borderColor: "#ff6f61",
      fill: false,
    }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});

// AirFryer Game
function cook(food) {
  const foodSlot = document.getElementById("food-slot");
  const result = document.getElementById("result");

  // Clear previous result
  result.textContent = "";

  // Show food in the air fryer
  foodSlot.textContent = getFoodEmoji(food);

  // Simulate cooking
  setTimeout(() => {
    foodSlot.textContent = "🍴"; // Fork and knife emoji
    result.textContent = `Your ${food} is ready! ${getResultEmoji(food)}`;
  }, 2000);
}

function getFoodEmoji(food) {
  switch (food) {
    case "fries": return "🍟";
    case "chicken": return "🍗";
    case "pizza": return "🍕";
    case "broccoli": return "🥦";
    default: return "❓";
  }
}

function getResultEmoji(food) {
  switch (food) {
    case "fries": return "😋";
    case "chicken": return "🍗🔥";
    case "pizza": return "🍕✨";
    case "broccoli": return "🥦🤢";
    default: return "❓";
  }
}
