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

                switch (index){
                    case 0:
                       changeHighlight(navLinks,0);
                       break;
                    case 1:
                        changeHighlight(navLinks,1);
                        break;
                    case 2:
                        changeHighlight(navLinks,2);
                        break;
                    case 3:
                        changeHighlight(navLinks,-1);
                        break;
                    case 4:
                        changeHighlight(navLinks,3);
                        break;
                    case 5:
                        changeHighlight(navLinks,4);
                        break;
                    case 6:
                        changeHighlight(navLinks,-1);
                        break;
                }

            }

        });
    }

    window.addEventListener('scroll', highlightNavLink);
});

function changeHighlight(navLinks, index){
    if (index !== -1){
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
});

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
ScrollReveal().reveal('.skill_container p', {delay : 300, origin: 'bottom', interval:100});
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

//cursor
const cursor = document.querySelector('.cursor_outline');

window.addEventListener('mousemove', (e) =>{

    let posX = e.clientX;
    let posY = e.clientY;

    cursor.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 400, fill: 'forwards'});

});

//counting animation
const display = document.querySelector('.number');
const section = document.querySelector('#about_me');

let startValue;
let endValue = parseInt(display.getAttribute('data-val'));
let active = false;

window.addEventListener('scroll', () => {
    if (pageYOffset > section.offsetTop - section.offsetHeight - 200 && active === false){
        startValue = 0;
        let counter = setInterval(() => {
            startValue++;
            display.textContent = `${startValue}+ `;
            if (startValue === endValue){
                clearInterval(counter);
            }
        }, Math.floor(2000 / endValue));
        active = true;
    }else if(pageYOffset < section.offsetTop - section.offsetHeight - 500 || pageYOffset === 0 && active === true){
        display.textContent = '0+ ';
        active = false;
    }
});

(function(){
    emailjs.init("qB_ZadsDSmFghoi2w");
})();

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('#message');

function sendMail(){

    let parameter = {
        name: name.value,
        email: email.value,
        message: msg.value
    };

    const serviceId = 'service_sy3lx54';
    const templateId = 'template_hx99irk';

    emailjs.send(serviceId, templateId, parameter).then((res) => {
        name.value = '';
        email.value = '';
        msg.value = '';

        Swal.fire('Message send!', 'Thank you for sharing your ideas with me.', 'success');
    }).catch((e) => {
        alert(e);
    })
}

particlesJS("particles-js",
    {"particles":{"number":{"value":12,"density":{"enable":true,"value_area":800}},
            "color":{"value":"#291b34"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},
            "polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},
            "opacity":{"value":0.1,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
            "size":{"value":100,"random":false,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},
            "line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},
            "move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"out",
            "bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},
            "onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},
            "repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true
    }
);







