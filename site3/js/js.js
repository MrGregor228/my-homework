let menu = document.getElementById('menu'),
    toggleButton = document.querySelector('.menu-toggler');

toggleButton.addEventListener('click', function () {
    menu.classList.toggle('show');
});

window.addEventListener('load', function () {
    if (document.body.clientWidth > 800) {
        menu.classList.remove('show');
    } 
});

window.addEventListener('resize', function () {
    if (document.body.clientWidth > 800) {
        menu.classList.remove('show');
    } 
});