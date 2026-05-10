// home.js - Simple animations for home page

document.addEventListener('DOMContentLoaded', function () {
  // Animate feature cards on scroll (simple fade-in)
  const cards = document.querySelectorAll('.feature-card');

  function checkVisible() {
    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 100);
      }
    });
  }

  // Set initial state
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  });

  window.addEventListener('scroll', checkVisible);
  checkVisible();
});