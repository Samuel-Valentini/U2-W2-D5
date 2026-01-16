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
    const width = window.innerWidth;

    if (width >= 768) {
        const images = document.querySelectorAll(".firstturn");

        images.forEach((image) => {
            image.classList.toggle("display-none-custom-2");
        });
    } else if (width >= 576) {
        const images = document.querySelectorAll(".firstturn-3");

        images.forEach((image) => {
            image.classList.toggle("display-none-custom-2");
        });
    } else {
        const images = document.querySelectorAll(".firstturn-2");

        images.forEach((image) => {
            image.classList.toggle("display-none-custom-2");
        });
    }
});

leftArrow.addEventListener("click", () => {
    const width = window.innerWidth;

    if (width >= 768) {
        const images = document.querySelectorAll(".firstturn");

        images.forEach((image) => {
            image.classList.toggle("display-none-custom-2");
        });
    } else if (width >= 576) {
        const images = document.querySelectorAll(".firstturn-3");

        images.forEach((image) => {
            image.classList.toggle("display-none-custom-2");
        });
    } else {
        const images = document.querySelectorAll(".firstturn-2");

        images.forEach((image) => {
            image.classList.toggle("display-none-custom-2");
        });
    }
});
