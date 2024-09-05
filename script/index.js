window.onscroll = function() {
    const header = document.querySelector("header");
    if (window.pageYOffset > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navLinks.classList.toggle("active");
});