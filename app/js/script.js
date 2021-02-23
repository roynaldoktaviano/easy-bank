let hamburger = document.querySelector(".header-menu-hamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", function(){
    if(header.classList.contains('open')){ // Close Hamburger
        header.classList.remove("open");
        overlay.classList.remove("fade-in")
        overlay.classList.add("fade-out");
    } else { //Open Hamburger
        header.classList.add("open");
        overlay.classList.remove("fade-out");
        overlay.classList.add("fade-in");
    }
})