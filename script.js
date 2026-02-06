const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const yearSpan = document.getElementById('year');

// Set current year
yearSpan.textContent = new Date().getFullYear();

// Theme Toggle Logic
themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.replace('dark', 'light');
    themeToggle.textContent = '🌙';
  } else {
    body.classList.replace('light', 'dark');
    themeToggle.textContent = '☀️';
  }
});
