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

//mode change
const checkbox = document.getElementById('mode-check');

checkbox.addEventListener('click',() => {
    document.body.classList.toggle('light');
});

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