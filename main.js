// Initialize AOS for smooth scrolling animations
AOS.init({
  duration: 1000,  // animation duration
  easing: 'ease-in-out',  // smooth easing
  once: true,  // Only animate once when scrolling into view
});


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

// Smooth scroll for "Learn More" button (optional)
document.addEventListener('DOMContentLoaded', () => {
  const learnMoreButton = document.querySelector('.about-text .btn');
  if (learnMoreButton) {
      learnMoreButton.addEventListener('click', function(event) {
          event.preventDefault();
          window.scrollTo({
              top: document.querySelector('#about').offsetTop,
              behavior: 'smooth',
          });
      });
  }
});


// Add smooth scroll animation for feature items
document.addEventListener('DOMContentLoaded', function () {
    const featureItems = document.querySelectorAll('.feature-item');
    
    // Intersection Observer for Animating Feature Items on Scroll
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.3
    });

    // Observe all feature items
    featureItems.forEach(item => {
        observer.observe(item);
    });
});

// Adding fade-in effect when elements come into view
document.addEventListener('DOMContentLoaded', function () {
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
    `;
    document.head.appendChild(style);
});

// Adding hover effect to social icons for interactivity
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});


// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
  // Select all accordion buttons
  const accordionButtons = document.querySelectorAll('.accordion-button');
  
  // Loop through each accordion button
  accordionButtons.forEach(button => {
      // Add event listener to each button
      button.addEventListener('click', function () {
          // Close all other open accordion items
          accordionButtons.forEach(otherButton => {
              if (otherButton !== button) {
                  otherButton.classList.remove('collapsed');
                  const collapseBody = otherButton.closest('.accordion-item').querySelector('.accordion-collapse');
                  if (collapseBody) {
                      collapseBody.classList.remove('show');
                  }
              }
          });

          // Toggle the clicked accordion item
          const collapseBody = button.closest('.accordion-item').querySelector('.accordion-collapse');
          if (collapseBody) {
              collapseBody.classList.toggle('show');
          }
          button.classList.toggle('collapsed');
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const clientCards = document.querySelectorAll('.client-card');
  
  // Hover effect: Increase shadow and lift the card
  clientCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
          card.style.transform = 'translateY(-10px)';
          card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      });

      card.addEventListener('mouseleave', () => {
          card.style.transform = 'translateY(0)';
          card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
      });
  });
});


