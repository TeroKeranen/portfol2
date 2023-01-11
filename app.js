
const navToggle = document.querySelector('.nav-toggle'); // Otetaan hampulais nappi omaan muuttujaan
const links = document.querySelector('.links'); // Otetaan linkit omaan muuttujaan

// Hampurilaispainiketta painamalla se poistaa tai lisää "show-links" classin links divin sisälle.
navToggle.addEventListener('click', function() {
    links.classList.toggle('show-links');
})