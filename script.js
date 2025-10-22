document.addEventListener('DOMContentLoaded', () => {

    
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');
    const mobileLinks = mobileNav ? mobileNav.querySelectorAll('.nav-mobile-link') : []; // Get links safely

    function displayStatus(message, isError = false) {
        const formStatus = document.getElementById('formStatus');
        if (!formStatus) return;

        formStatus.textContent = message;
        formStatus.classList.remove('hidden', 'form-status-success', 'form-status-error');

        
        if (isError) {
            formStatus.classList.add('form-status-error');
        } else {
            formStatus.classList.add('form-status-success');
        }

        
        setTimeout(() => {
            formStatus.classList.add('hidden');
            formStatus.classList.remove('form-status-error', 'form-status-success');
        }, 4000);
    }


    
    if (menuBtn && mobileNav && menuIcon) {
        menuBtn.addEventListener('click', () => {
            // Toggle the recommended 'is-open' class for CSS transition
            const isOpen = mobileNav.classList.toggle('is-open');

            if (isOpen) {
                menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
            } else {
            
                menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
            }
        });
    }
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav && mobileNav.classList.contains('is-open')) {

                mobileNav.classList.remove('is-open');
                // Reset icon to hamburger
                if (menuIcon) {
                    menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
                }
            }
        });
    });

    // --- 3. Contact form validation and simulated send ---
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const msg = form.message.value.trim();

            if (!name || !email || !msg) {
                displayStatus('Please fill in all fields.', true);
                return;
            }

            // Simulate form submission success
            displayStatus('Message sent successfully! Thank you.', false);
            form.reset();
        });
    }

    // --- 4. Mailto fallback ---
    const mailtoBtn = document.getElementById('mailtoBtn');
    if (mailtoBtn) {
        mailtoBtn.addEventListener('click', () => {
            const subject = encodeURIComponent('Work inquiry — Portfolio');
            const body = encodeURIComponent('Hi Herbertz,\n\nI would like to discuss ...\n\nRegards,\n');
            window.location.href = `mailto:loputherbert@gmail.com?subject=${subject}&body=${body}`;
        });
    }
});
    AOS.init({
            duration: 1200,
            offset: 100,
            once: true,
        });

/*
    // --- Bonus: Intersection Observer for fade-up animations ---
    const fadeUpElements = document.querySelectorAll('.fade-up');
    if ('IntersectionObserver' in window && fadeUpElements.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeUpElements.forEach(element => {
            observer.observe(element);
        });
    }
});
*/