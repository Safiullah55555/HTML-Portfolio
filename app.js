document.addEventListener('DOMContentLoaded', function() {
        const currentLocation = window.location.href;
        // const navLinks = document.querySelectorAll('.sticky-nav .sticky-nav-options a');
        const navLinks = document.querySelector(".sticky-nav .sticky-nav-options a")
    
        navLinks.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active');
            }
        });
    });