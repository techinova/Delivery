"use strict";
const hamburgerMenuElement = document.querySelector(".hamburger-menu");
const navLinksElement = document.querySelector(".nav-links");
if (hamburgerMenuElement && navLinksElement) {
    hamburgerMenuElement.addEventListener("click", () => {
        hamburgerMenuElement.classList.toggle("active");
        navLinksElement.classList.toggle("active");
    });
}
