const dropdown = () => {
    const navGrid = document.querySelector(".nav-grid");
    const navCross= document.querySelector(".nav-close");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");

//Toggle Nav//
navGrid.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
    navMenu.classList.toggle("hide-menu");
})

navCross.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
    navMenu.classList.toggle("hide-menu");
})

//Animate Links//
navLink.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
    console.log(index / 5);
})
}
dropdown();