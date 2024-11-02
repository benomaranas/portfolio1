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
// script.js
// script.js
// script.js
// script.js
function toggleSection(currentButtonClass, sectionToShowId, sectionToHideId) {
    const sectionToShow = document.getElementById(sectionToShowId);
    const sectionToHide = document.getElementById(sectionToHideId);

    // Check if the section to show is already visible
    if (sectionToShow.classList.contains('hidden')) {
        // Hide the currently visible section (if any)
        if (sectionToHide) {
            sectionToHide.style.opacity = '0'; // Start fade-out effect
            setTimeout(() => {
                sectionToHide.classList.add('hidden'); // Add hidden class after fade-out
            }, 500); // Match this duration with the CSS transition
        }

        // Show the section
        sectionToShow.classList.remove('hidden'); // Make visible
        sectionToShow.style.opacity = '1'; // Set opacity for fade-in
    } else {
        // If already visible, just toggle to hide it (optional)
        sectionToShow.style.opacity = '0'; // Start fade-out effect
        setTimeout(() => {
            sectionToShow.classList.add('hidden'); // Add hidden class after fade-out
        }, 500); // Match this duration with the CSS transition
    }
}

// Event listeners for the buttons
document.querySelector('.get_to_know_me_button').addEventListener('click', function() {
    toggleSection('get_to_know_me_button', 'aboutMeSection', 'projectsSection');
});

document.querySelector('.view_my_projects_button').addEventListener('click', function() {
    toggleSection('view_my_projects_button', 'projectsSection', 'aboutMeSection');
});



// Call the function to activate the toggle functionality
toggleInfo();
toggleSection();
