function initScrollAnimation() {
    const scrollItems = document.querySelectorAll('.scroll-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Add 'show' class when item is in view
            } else {
                entry.target.classList.remove('show'); // Remove 'show' class when item is out of view
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the item is visible
    });

    // Observe each scroll item
    scrollItems.forEach(item => observer.observe(item));
}

// Run the function after the DOM has loaded
document.addEventListener("DOMContentLoaded", initScrollAnimation);
function toggleInfo() {
    document.querySelectorAll('.info-button').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.grid-item');
            card.classList.toggle('active');
            // Toggle button text
            if (card.classList.contains('active')) {
                button.textContent = "Hide Info";
            } else {
                button.textContent = "More Info";
            }
        });
    });
}

// Call the function to activate the toggle functionality
toggleInfo();