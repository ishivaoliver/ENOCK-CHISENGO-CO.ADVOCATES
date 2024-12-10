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
    const animatedTexts = document.querySelectorAll(".animated-text");

    // Function to create typing effect
    const typeEffect = (element, text, speed = 100) => {
        element.textContent = ""; // Clear current content
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

    // Initialize typing animation for the active slide
    const initTypingEffect = () => {
        const activeItem = document.querySelector(".carousel-item.active .animated-text");
        if (activeItem) {
            const text = activeItem.getAttribute("data-text") || activeItem.textContent.trim();
            typeEffect(activeItem, text);
        }
    };

    // Attach event listener to update typing effect on slide change
    const carousel = document.getElementById("heroCarousel");
    if (carousel) {
        carousel.addEventListener("slid.bs.carousel", initTypingEffect);
    }

    // Start the typing effect on page load
    initTypingEffect();
});
