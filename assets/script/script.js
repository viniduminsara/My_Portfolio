//preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none';
    }, 2000);
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

const menuBtn = document.querySelector('.menu-btn');
const navToggle = document.querySelector('.nav_links');
const navContainer = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navToggle.classList.toggle('active');
    navContainer.classList.toggle('active');
});

