const hamburgerMenuElement = document.querySelector(".hamburger-menu") as HTMLElement | null;
const navLinksElement = document.querySelector(".nav-links") as HTMLElement | null;

if (hamburgerMenuElement && navLinksElement) {
    hamburgerMenuElement.addEventListener("click", () => {
        hamburgerMenuElement.classList.toggle("active");
        navLinksElement.classList.toggle("active");
    });
}

