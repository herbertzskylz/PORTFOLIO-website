
document.addEventListener('DOMContentLoaded', () => {

   //mobile navigation toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');
    const mobileLinks = mobileNav ? mobileNav.querySelectorAll('.nav-mobile-link') : [];

    if (menuBtn && mobileNav && menuIcon) {
        menuBtn.addEventListener('click', () => {
            const isOpen = mobileNav.classList.toggle('is-open');

            // Change icon between "close" (X) and "hamburger"
            menuIcon.innerHTML = isOpen
                ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>'
                : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        });
    }

    // Auto-close mobile nav when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('is-open')) {
                mobileNav.classList.remove('is-open');
                if (menuIcon) {
                    menuIcon.innerHTML =
                        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
                }
            }
        });
    });


   document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  const formStatus = document.getElementById('formStatus');
  if (response.ok) {
    formStatus.textContent = 'Message sent successfully!';
    form.reset();
  } else {
    formStatus.textContent = 'Something went wrong. Try again.';
  }
});

     //mailto button
    const mailtoBtn = document.getElementById('mailtoBtn');

    if (mailtoBtn) {
        mailtoBtn.addEventListener('click', () => {
            const subject = encodeURIComponent('Work inquiry — Portfolio');
            const body = encodeURIComponent('Hi Herbertz,\n\nI would like to discuss ...\n\nRegards,\n');
            window.location.href = `mailto:loputherbert@gmail.com?subject=${subject}&body=${body}`;
        });
    }

    //AOS animation initialization
    AOS.init({
        duration: 1200,
        offset: 100,
        once: true,
    });
});
