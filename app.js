function starField (getSpeed, height,width) {


let canvas = document.getElementById('stars');
canvas.width = width;
canvas.height = height;

let c = canvas.getContext("2d");
let numStars = 150;
let stars = [];
let size  = 1;
let fl = canvas.width;
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
let speed = getSpeed;
for (let i = 0; i < numStars; i++) {
    stars[i] = new Star();
}


function Star () {
    this.x = Math.random() * canvas.width;
    this.y = Math.random () * canvas.height;
    this.z = Math.random () * canvas.width;


    this.move = function () {
        this.z = this.z-speed;
        if (this.z <= 0) {
            this.z = canvas.width;
        }
    }
    this.show = function () {

        let x,y,s;

        x = (this.x - centerX) * (fl/this.z);
        x = x + centerX;

        y = (this.y - centerY) * (fl/this.z);
        y = y+centerY

        s = size * (fl/this.z);

        c.beginPath();
        c.fillStyle = "white";
        c.arc(x,y,s,0,Math.PI*2);
        c.fill();
    }

};


function draw () {

    c.fillStyle = "black";
    c.fillRect(0,0,canvas.width,canvas.height);
    for (let i = 0; i < numStars; i++) {
    stars[i].show();
    stars[i].move();
}
    



}

function update () {
    draw();
    window.requestAnimationFrame(update);
}

update();
}

// Navigaatio palkin toiminta mobiili laitteella
function mobileNavbar () {

    const navToggle = document.querySelector('.nav-toggle'); // Otetaan hampulais nappi omaan muuttujaan
    const links = document.querySelector('.links'); // Otetaan linkit omaan muuttujaan
    const navCenter = document.querySelector('.nav-center');
    

    navToggle.addEventListener('click', function() {
        links.classList.toggle('show-links');
    })

}


///////////////////////////////////////
//////// Index page transition////////
/////////////////////////////////////

function welcomePageTransition () {

    
    
    setInterval(function() {
        
        window.location = "http://127.0.0.1:5500/welcome.html"
        
         
    },10000)
    
};

// function joka alkaa index sivulla, 
function startCountdown() {
    let welcomeText = document.querySelector('.fade-h2'); // Otetaan welcome teksti talteen omaan muuttujaan
    let height = window.innerHeight;
    let width = window.innerWidth
    let speed = 10; // asetetaan starFiel functiolle nopeus 10
    starField(speed,height,width);

    let counter = 10; // Tehdaan counter muuttuja jota k??ytet????n apuna ennenkuin sivu vaihtuu

    // Tehd????n intervalli omaan muuttujaan jotta se voidaan nollata lopuksi
    const interval = setInterval(()=> {
        
        counter--; // Pienennet????n laskuria 

        // Kun laskuri on alle 1 niin asetetaan starField functiolle uusi nopeus, vaihdetaan welcome tekstin css tyyli tiedostoja
        if (counter < 1) {
            speed = 300;
            welcomeText.style.color = 'transparent'
            welcomeText.style.textShadow = 'rgb(250, 247, 247) 0 0 40px'
            welcomeText.style.transform = "scale(0)"
            starField(speed,height,width);
        }
        // Kun laskuri on alle 0 niin se ajaa uudelle sivulle meid??t.
        if (counter < 0) {
            speed = 300;
            starField(speed,height,width);
            clearInterval(interval); // nollataan interval
            window.location = "http://127.0.0.1:5500/welcome.html"
        }
    },1000)
}

////////////////////////////////////////
///////// Page Transition /////////////
//////////////////////////////////////
function pageTransition () { // K??ytet????n t??t?? functiota sivuvaihdoissa

    // Aina sivun ladattaessa timeoutti poistaa is-active tyylin transition classista
    
    window.onload = () => {


        let pageContainer = document.querySelector('.page-container') // Otetaan welcome pagelta class page-container omaan muuttujaan
        let height = pageContainer.scrollHeight; // Otetaan classin page-container scrollheight omaan muuttujaan jotta sit?? voidaan k??ytt???? apuna starField function kanssa
        let width = pageContainer.scrollWidth; // Otetaan classin page-container scrollheight omaan muuttujaan jotta sit?? voidaan k??ytt???? apuna starField function kanssa
        let transition_el = document.querySelector('.transition') // otetaan class transition omaan muuttujaan jotta siit?? voidaan poistaa apu classeja
        starField(10, height,width)
        let a = document.querySelectorAll("button")

        a.forEach((e) => {
            
            e.addEventListener('click', function (e) {
                const currTarget = e.currentTarget.classList;
                console.log(currTarget);
                let counter = 10;
                const interval = setInterval(() => {
                    counter--
                    if (counter <3) {
                        starField(300,height,width);
                    }
                    if ( counter < 0) {
                        clearInterval(interval)
                        if (currTarget.contains("projects")) {
                            window.location = "http://127.0.0.1:5500/projects.html"
                        }
                        if (currTarget.contains("login")) {
                            window.location = "http://127.0.0.1:5500/login.html"
                        }
                        if (currTarget.contains("register")) {
                            window.location = "http://127.0.0.1:5500/register.html"
                        }
                        

                    }
                    
                }, 100);
            })
        })
        

        
        setTimeout(()=> {
            
            transition_el.classList.remove('is-active');
        },100)

    }

    // Jos n??yt??n koko muuttuu k??yt??n aikana niin sivu lataa itsens?? uudestaan
    window.onresize = function () {
        if (window.innerWidth != -10) {
            location.reload();
        }
    }

}

// Funktio jolla tulee tekstit n??kyviin kun tarpeeksi scrollaa
function scrollAnimation () {
    window.addEventListener('scroll', () => {

        // Otetaan sivusotn row classit omaan muuttujaan
        let contents = document.querySelectorAll('.row');
        //Otetaan windowsin innerheight omaan muuttujaan
        let screenPosition = window.innerHeight;

        // Luupataan row classit l??pi forEachloopilla
        contents.forEach((e) => {
            // Otetaan e:n elementteist?? tietoa omaan muuttujaan
            let contentPosition = e.getBoundingClientRect().top;

            if(contentPosition < screenPosition) {
                e.classList.add('active');

            } else {
                e.classList.remove('active');
            }
        })
    })
}


// let transition_el = document.querySelector('.transition')
function main () {
    
    
    // Index sivulla ollessa se k??ynnist???? starCountdown function
    if ( window.location.href === "http://127.0.0.1:5500/") {
        

        
        startCountdown();
        
     
    // muilla sivuilla k??ynnistyy sivunvaihto ja navbar functiot
    } else {
        
        pageTransition();
        mobileNavbar();
        
        
    }

    scrollAnimation();
    
    

    
}



main();
