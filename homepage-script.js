/*Logo animation*/
document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('.logo img');

    // Add bounce effect on load
    logo.style.animation = "bounce 2s infinite";

    logo.addEventListener('mouseover', () => {
        logo.style.transform = "scale(1.15)";
    });

    logo.addEventListener('mouseout', () => {
        logo.style.transform = "scale(1)";
    });
});

/*Function for toggleMode*/
let isDarkMode = false;

function toggleMode() {
    const body = document.body;
    const footer = document.querySelector('footer');
    const toggle = document.querySelector('.toggle');
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        body.classList.add('dark-mode');
        toggle.classList.add('active');
    } else {
        body.classList.remove('dark-mode');
        toggle.classList.remove('active');
    }
}

