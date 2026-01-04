// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Highlight current page
const navLinksAll = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname.split("/").pop();

navLinksAll.forEach(link => {
    if (link.getAttribute('href') === currentPage || 
        (link.getAttribute('href') === 'index.html' && currentPage === '')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
