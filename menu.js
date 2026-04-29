// menu.js

// Fade + slide up animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Observe all animatable elements
document.querySelectorAll('.img-card, .list-item, .section-head, .special-bar, .footer-note')
  .forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });

// Stagger img-card children inside each grid
document.querySelectorAll('.img-grid').forEach(grid => {
  grid.querySelectorAll('.img-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
  });
});

// Hero entrance animation
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hero').classList.add('hero-animate');
});

// Card hover tilt effect
document.querySelectorAll('.img-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    card.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
    card.style.transition = 'transform 0.4s ease';
  });
});