// Select elements
const hamburger = document.querySelector('.hamburger');
const heroSection = document.querySelector('.hero-section');
const body =document.querySelector('body');

// Toggle menu on click
hamburger.addEventListener('click', () => {
  if (heroSection.style.display === 'flex') {
    heroSection.style.display = 'none';
  } else {
    heroSection.style.display = 'flex';
    heroSection.style.flexDirection = 'column';
    heroSection.style.position = 'absolute';
    heroSection.style.top = '60px';
    heroSection.style.right = '30px';
    heroSection.style.backgroundColor = 'rgba(10, 15, 25, 0.9)';
    heroSection.style.padding = '15px';
    heroSection.style.borderRadius = '10px';
    heroSection.style.gap = '5px';
  }
});
body.addEventListener('click', (event) => {
  if (!heroSection.contains(event.target) && !hamburger.contains(event.target)) {
    heroSection.style.display = 'none';
  } else {
    heroSection.style.display = 'flex';
    heroSection.style.flexDirection = 'column';
    heroSection.style.position = 'absolute';
    heroSection.style.top = '60px';
    heroSection.style.right = '30px';
    heroSection.style.backgroundColor = 'rgba(10, 15, 25, 0.9)';
    heroSection.style.padding = '15px';
    heroSection.style.borderRadius = '10px';
    heroSection.style.gap = '5px';
  }
});