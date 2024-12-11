document.addEventListener("DOMContentLoaded", () => {
    // Dropdown hover functionality
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseover", () => {
            const menu = dropdown.querySelector(".dropdown-menu");
            menu.classList.add("show");
        });

        dropdown.addEventListener("mouseleave", () => {
            const menu = dropdown.querySelector(".dropdown-menu");
            menu.classList.remove("show");
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll("a.nav-link, a.btn").forEach(link => {
        link.addEventListener("click", event => {
            if (link.hash) {
                event.preventDefault();
                const target = document.querySelector(link.hash);
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    // Typing effect on active slide in the hero section
    const typeEffect = (element, text, speed = 100) => {
      element.textContent = ""; 
      let index = 0;
  
      const type = () => {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(type, speed);
        }
      };
  
      type();
    };
  
    const initTypingEffect = () => {
      const activeItem = document.querySelector(".carousel-item.active .animated-text");
      if (activeItem) {
        const text = activeItem.getAttribute("data-text") || activeItem.textContent.trim();
        typeEffect(activeItem, text);
      }
    };
  
    const carousel = document.getElementById("heroCarousel");
    if (carousel) {
      carousel.addEventListener("slid.bs.carousel", initTypingEffect);
    }
  
    // Start the typing effect on page load
    initTypingEffect();
  });
  





// Smooth scroll to team section when "Meet Our Team" button is clicked
document.getElementById("our-team-btn").addEventListener("click", function() {
    document.querySelector("#team").scrollIntoView({ behavior: 'smooth' });
});




document.addEventListener("DOMContentLoaded", () => {
    // Add hover effect to cards dynamically for smooth transitions
    const teamCards = document.querySelectorAll('.team-card');

    teamCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});







document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Basic validation
    if (name && email && message) {
      alert("Thank you for reaching out. We will get back to you soon.");
      // You can send the form data to your server here
    } else {
      alert("Please fill out all the fields.");
    }
  });
  











//   footer
// Handling newsletter subscription form
document.getElementById("newsletter-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = e.target.querySelector("input[type='email']").value;
  
    // Simple validation
    if (email) {
      alert("Thank you for subscribing!");
    } else {
      alert("Please enter a valid email.");
    }
  });
  