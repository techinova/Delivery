"use strict";
const hamburgerMenuEl = document.querySelector(".hamburger-menu");
const navLinksEl = document.querySelector(".nav-links");
if (hamburgerMenuEl && navLinksEl) {
    hamburgerMenuEl.addEventListener("click", () => {
        hamburgerMenuEl.classList.toggle("active");
        navLinksEl.classList.toggle("active");
    });
}
