// script.js

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);
    console.log('Form submitted with data:', Object.fromEntries(formData));
    // Add your form handling logic here
}

// Function to handle navigation clicks
function handleNavigationClick(event) {
    event.preventDefault(); // Prevent default navigation
    const targetSection = event.target.getAttribute('href');
    const section = document.querySelector(targetSection);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
    const navigationLinks = document.querySelectorAll('nav a');
    navigationLinks.forEach(link => {
        link.addEventListener('click', handleNavigationClick);
    });
});