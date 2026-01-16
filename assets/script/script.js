console.log("script.js online");

// creo un piccolo script per rendere il menu sempre visibile

const miniButton = document.getElementById("mini-button");
const menuSpace = document.getElementById("menu-space");

miniButton.addEventListener("click", () => {
    menuSpace.classList.toggle("display-none-custom");
});

//

const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");

rightArrow.addEventListener("click", () => {
    console.log("click right");
    const images = document.querySelectorAll(".firstturn");

    images.forEach((image) => {
        image.classList.toggle("display-none-custom-2");
    });
});

leftArrow.addEventListener("click", () => {
    console.log("click left");
    const images = document.querySelectorAll(".firstturn");

    images.forEach((image) => {
        image.classList.toggle("display-none-custom-2");
    });
});
