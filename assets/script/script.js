//preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none';
    }, 2000);
});
