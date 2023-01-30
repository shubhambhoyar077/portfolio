let openbtn = document.querySelector(".nav-bar .toggle-menu");
let mobileMenu = document.querySelector(".nav-bar .mobile-menu");
let menuBar = document.querySelector(".nav-bar .menu-bar");
let closebtn = document.querySelector(".nav-bar .close-menu");
let navLinks = document.querySelector(".nav-bar .mobile-menu .nav-links")

function toggleMenu(){
    mobileMenu.classList.toggle('disable');
    menuBar.classList.toggle('disable');
}

openbtn.addEventListener('click', toggleMenu);
closebtn.addEventListener('click', toggleMenu);
navLinks.addEventListener('click', function(e){
    if(e.target.className === "nav-item"){
        toggleMenu()
    }
});