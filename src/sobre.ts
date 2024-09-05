const hamburgerMenuEl = document.querySelector(".hamburger-menu") as HTMLElement | null;
const navLinksEl = document.querySelector(".nav-links") as HTMLElement | null;

if (hamburgerMenuEl && navLinksEl) {
    hamburgerMenuEl.addEventListener("click", () => {
        hamburgerMenuEl.classList.toggle("active");
        navLinksEl.classList.toggle("active");
    });
}
