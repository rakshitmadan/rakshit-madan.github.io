document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggler ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the saved theme on page load
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-theme');
            themeToggleButton.textContent = '🌙';
        } else {
            body.classList.remove('dark-theme');
            themeToggleButton.textContent = '☀️';
        }
    };

    // Event listener for the theme toggle button
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggleButton.textContent = '🌙';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleButton.textContent = '☀️';
        }
    });

    // Apply the theme when the page loads
    applySavedTheme();

    // --- Mobile Navigation (Hamburger Menu) ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});
