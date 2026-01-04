document.addEventListener('DOMContentLoaded', () => {

    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.getElementById('navbar');
    const navLinksAll = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    /* MOBILE MENU */
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    /* ACTIVE LINK ON PAGE LOAD (SEPARATE PAGES) */
    const hash = window.location.hash.replace('#', '');
    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (hash && link.dataset.section === hash) {
            link.classList.add('active');
        }
    });

    /* SCROLL SPY (HOME PAGE ONLY) */
    if (sections.length > 1) {
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const top = section.offsetTop - 120;
                const height = section.offsetHeight;
                if (scrollY >= top && scrollY < top + height) {
                    current = section.id;
                }
            });

            navLinksAll.forEach(link => {
                link.classList.remove('active');
                if (link.dataset.section === current) {
                    link.classList.add('active');
                }
            });

            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }
});
