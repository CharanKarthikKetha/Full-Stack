// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Example: Toggle the 'show' class on the navbar menu
    const toggleButton = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('#menu');

    if (toggleButton && menu) {
        toggleButton.addEventListener('click', function() {
            menu.classList.toggle('show');
        });
    }

    // Smooth scroll for anchor links in the navbar
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Handle hover effects for product cards
    const productCards = document.querySelectorAll('.card');

    productCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseout', function() {
            this.style.boxShadow = '5px 5px 10px black';
        });
    });
});
