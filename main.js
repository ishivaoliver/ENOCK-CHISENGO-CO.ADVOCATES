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



// Typing Animation
const typedTextElement = document.getElementById('typed-output');
const textArray = ["Empowering Your Business", "Ensuring Justice for All", "Committed to Legal Excellence"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let typingSpeed = 100; // Speed of typing effect

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        currentText += textArray[textIndex].charAt(charIndex);
        typedTextElement.textContent = currentText;
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(deleteText, 1500); // Pause before deleting
    }
}

function deleteText() {
    if (charIndex > 0) {
        currentText = currentText.substring(0, currentText.length - 1);
        typedTextElement.textContent = currentText;
        charIndex--;
        setTimeout(deleteText, typingSpeed / 2);
    } else {
        textIndex = (textIndex + 1) % textArray.length; // Move to the next text
        setTimeout(typeText, 500); // Start typing new text
    }
}

// Start typing the first sentence
typeText();
