const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Force dark mode on load
body.classList.add("dark");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
