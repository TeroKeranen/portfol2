const navToggle = document.querySelector('.nav-toggle'); // Otetaan hampulais nappi omaan muuttujaan
const links = document.querySelector('.links'); // Otetaan linkit omaan muuttujaan
const navCenter = document.querySelector('.nav-center');

navToggle.addEventListener('click', function() {
        links.classList.toggle('show-links');
    })