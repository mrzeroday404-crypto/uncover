// --- Existing Logic: Theme & Date ---
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const yearSpan = document.getElementById('year');

// Set current year
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

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

// --- New Logic: LinkedIn Carousel ---
const track = document.getElementById('carouselTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const slides = Array.from(track.children);

let currentIndex = 0;

/**
 * Updates the position of the track based on the current index
 */
const updateSlidePosition = () => {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

// Next Button Click
nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to start
  }
  updateSlidePosition();
});

// Previous Button Click
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1; // Loop to end
  }
  updateSlidePosition();
});

// Handle Window Resize
// If the user rotates their phone or resizes the browser, 
// the width changes, so we must recalculate the offset.
window.addEventListener('resize', updateSlidePosition);
