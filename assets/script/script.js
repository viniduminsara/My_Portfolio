//preloader
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
});

//nav link active
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    function highlightNavLink() {
        let scrollPos = window.scrollY + 400;

        sections.forEach((section, index) => {
            if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {

                if(index > 3){
                    navLinks.forEach((link) => {
                        link.classList.remove('active-link');
                    });
                    navLinks[index-1].classList.add('active-link');
                }else if(index < 3){
                    navLinks.forEach((link) => {
                        link.classList.remove('active-link');
                    });
                    navLinks[index].classList.add('active-link');
                }else{
                    navLinks.forEach((link) => {
                        link.classList.remove('active-link');
                    });
                }

            }

        });
    }

    window.addEventListener('scroll', highlightNavLink);
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

//mode change
const checkbox = document.getElementById('mode-check');

checkbox.addEventListener('click',() => {
    document.body.classList.toggle('light');
});

//Add scrolling animation
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1800,
})

//home section
ScrollReveal().reveal('.heading, .details', {delay: 300, origin: 'left'});
ScrollReveal().reveal('.code_area', {delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.background_img, .social_links', {delay: 600, origin: 'right'});

//about me section
ScrollReveal().reveal('.about_me_header', {delay : 300, origin: 'bottom'});
ScrollReveal().reveal('.profile_picture', {delay : 400, origin: 'left'});
ScrollReveal().reveal('.about_me_details',{delay: 400, origin: 'right'});

//service section
ScrollReveal().reveal('.service_header div', {delay : 300, origin: 'bottom'});
ScrollReveal().reveal('.service_header img', {delay : 300, origin: 'left'});
ScrollReveal().reveal('.services_container .service_item',{delay: 400, origin: 'right', interval: 100});

//skill section
ScrollReveal().reveal('.skill_header', {delay : 300, origin: 'bottom'});
ScrollReveal().reveal('.main_skills img',{delay: 400, origin: 'right', interval:200});

//project section
ScrollReveal().reveal('.project_header div', {delay : 300, origin: 'bottom'});
ScrollReveal().reveal('.project_header img', {delay : 300, origin: 'left'});
ScrollReveal().reveal('.project_panel_row:first-child', {delay: 400, origin: 'right'});
ScrollReveal().reveal('.project_panel_row:last-child', {delay: 400, origin: 'left'});
ScrollReveal().reveal('#projects a', {delay: 300, origin: 'top'});

//assignment section
ScrollReveal().reveal('.assignment_header', {delay : 300, origin: 'bottom'});
ScrollReveal().reveal('.assignment_panel_row .assignment_container',{delay: 400, origin: 'right', interval:100});
ScrollReveal().reveal('#assignment a', {delay: 300, origin: 'top'});

//contact me section
ScrollReveal().reveal('.contactme_header', {delay : 300, origin: 'bottom'});
ScrollReveal().reveal('.contact_form form .form_input',{delay: 300, origin: 'right', interval:100});
ScrollReveal().reveal('form button',{delay: 300, origin: 'right'});
ScrollReveal().reveal('#contact_me img',{delay: 300, origin: 'bottom'});






