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
function toggleCardInfo() {
    document.querySelectorAll('.skills_section_container .grid-item .info-button').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.grid-item');
            
            // Close all other cards' info-content sections
            document.querySelectorAll('.skills_section_container .grid-item').forEach(item => {
                if (item !== card) {
                    item.classList.remove('active');
                    item.querySelector('.info-button').textContent = "More Info";
                }
            });
            
            // Toggle the clicked card's info-content section
            card.classList.toggle('active');
            button.textContent = card.classList.contains('active') ? "Hide Info" : "More Info";
        });
    });
}

document.addEventListener("DOMContentLoaded", toggleCardInfo);

document.addEventListener("DOMContentLoaded", toggleCardInfo);

// script.js
// script.js
// script.js
// script.js
function toggleAboutSection() {
    const aboutSection = document.getElementById('aboutMeSection');

    if (aboutSection.classList.contains('hidden')) {
        aboutSection.classList.remove('hidden');
        aboutSection.style.maxHeight = '1000px'; // Large enough to fully expand content
        aboutSection.style.opacity = '1';
        aboutSection.style.visibility = 'visible';
    } else {
        aboutSection.style.maxHeight = '0';
        aboutSection.style.opacity = '0';
        aboutSection.style.visibility = 'hidden';
        setTimeout(() => {
            aboutSection.classList.add('hidden');
        }, 500); // Match with transition duration
    }
}

// Event listener for "Get to know me" button
document.querySelector('.get_to_know_me_button').addEventListener('click', toggleAboutSection);




// Call the function to activate the toggle functionality
toggleInfo();
toggleSection();
toggleCardInfo();
