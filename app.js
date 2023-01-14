let transition_el = document.querySelector('.transition')





function delayRedirect () {
    
    
    setInterval(function() {
        
        
        
        window.location = "http://127.0.0.1:5500/welcome.html"
        

        
    },5000)
    
}


// let transition_el = document.querySelector('.transition')
function main () {
    if (window.location.href === "http://127.0.0.1:5500/") {
    transition_el.classList.remove('is-active');

    window.onload = function () {
        delayRedirect();
        

        }
    }

transition_el.classList.remove('is-active');
}



main();



const navToggle = document.querySelector('.nav-toggle'); // Otetaan hampulais nappi omaan muuttujaan
const links = document.querySelector('.links'); // Otetaan linkit omaan muuttujaan

// Hampurilaispainiketta painamalla se poistaa tai lisää "show-links" classin links divin sisälle.
navToggle.addEventListener('click', function() {
    links.classList.toggle('show-links');
})