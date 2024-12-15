// Smooth scrolling for better user experience
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});

// Highlight the active link while scrolling
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section'); // Replace with actual section IDs
  const navLinks = document.querySelectorAll('.nav-link');

  let currentSection = '';

  sections.forEach(section => {
      const sectionTop = section.offsetTop - 80; // Offset for fixed navbar
      if (scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
      }
  });

  navLinks.forEach(link => {
      link.classList.remove('active'); // Ensure only one active class
      if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
      }
  });
});

// Enable smooth scroll on page load to the carousel section
document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.querySelector('.carousel-caption a');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({
        top: document.querySelector('#carouselExampleRide').offsetTop,
        behavior: 'smooth',
      });
    });
  }
});

