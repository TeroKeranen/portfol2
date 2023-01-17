

// Navigaatio palkin toiminta mobiili laitteella
function mobileNavbar () {

    const navToggle = document.querySelector('.nav-toggle'); // Otetaan hampulais nappi omaan muuttujaan
    const links = document.querySelector('.links'); // Otetaan linkit omaan muuttujaan
    const navCenter = document.querySelector('.nav-center');
    

    navToggle.addEventListener('click', function() {
        links.classList.toggle('show-links');
    })

}



function delayRedirect () {
    
    setInterval(function() {
         
        window.location = "http://127.0.0.1:5500/welcome.html"
         
    },10000)
    
}




// let transition_el = document.querySelector('.transition')
function main () {
    
    let transition_el = document.querySelector('.transition')
    
    

    if (window.location.href === "http://127.0.0.1:5500/") {
    transition_el.classList.remove('is-active');

    window.onload = function () {
        delayRedirect();
        

        }   
    }

    transition_el.classList.remove('is-active');

    // Function to navbar 
    mobileNavbar();
    
    window.addEventListener('scroll', () => {
        let content = document.querySelector('.row');
        let contentPosition = content.getBoundingClientRect().top;
        let screenPosition = window.innerHeight ;

        if(contentPosition < screenPosition) {
            content.classList.add('active')
        } else {
            content.classList.remove('active');
        }
    })

    
}



main();



