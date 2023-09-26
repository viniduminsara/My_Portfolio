//preloader
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
});

//menu button
const menuBtn = document.querySelector('.menu-btn');
const navToggle = document.querySelector('.nav_links');
const navContainer = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navToggle.classList.toggle('active');
    navContainer.classList.toggle('active');
});

//Add scrolling animation
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1800,
});

//heading section
ScrollReveal().reveal('.header',{delay:300, origin:'bottom'});

//project section
ScrollReveal().reveal('.project_container', {delay: 400, origin: 'left'});
ScrollReveal().reveal('.project_container:nth-child(2n)', {delay: 400, origin: 'right'});