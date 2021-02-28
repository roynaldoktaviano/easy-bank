const body = document.querySelector("body");
const hamburger = document.querySelector(".header-menu-hamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElem = document.querySelectorAll(".fade-element");

// SCSS Variabel

hamburger.addEventListener("click", function(){
    if(header.classList.contains('open')){ // Close Hamburger
        header.classList.remove("open");
        body.classList.remove("no-scroll");
        fadeElem.forEach(function(element){
            element.classList.remove("fade-in")
            element.classList.add("fade-out");
        });
        
    } else { //Open Hamburger
        header.classList.add("open");
        body.classList.add("no-scroll");
        fadeElem.forEach(function(element){
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        });
    }
})
