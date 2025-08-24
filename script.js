// Smooth scrolling for nav links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Scroll-to-top button
const topBtn = document.querySelector('.top-btn');

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});
