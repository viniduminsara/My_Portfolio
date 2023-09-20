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
                        link.classList.remove('active');
                    });
                    navLinks[index-1].classList.add('active');
                }else if(index < 3){
                    navLinks.forEach((link) => {
                        link.classList.remove('active');
                    });
                    navLinks[index].classList.add('active');
                }else{
                    navLinks.forEach((link) => {
                        link.classList.remove('active');
                    });
                }

            }

        });
    }

    window.addEventListener('scroll', highlightNavLink);
});

