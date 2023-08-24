var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});


const hamburger = document.querySelector('.hamburger');
const sideNav = document.querySelector('.side-nav');
const sideNavLinks = sideNav.querySelectorAll('a');

hamburger.addEventListener('click', () => {
    sideNav.classList.toggle('active');
});

sideNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideNav.classList.remove('active');
    });
});

document.addEventListener('click', (event) => {
    // Check if the clicked element is not part of the sideNav
    if (!sideNav.contains(event.target) && !hamburger.contains(event.target)) {
        sideNav.classList.remove('active');
    }
});


