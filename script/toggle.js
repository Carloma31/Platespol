    document.addEventListener('DOMContentLoaded', function () {
        const menuToggle = document.querySelector('.menu-toggle');
        const navegador = document.querySelector('.navegador');

        menuToggle.addEventListener('click', function () {
            navegador.classList.toggle('active');
        });
    });