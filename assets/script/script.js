console.log("script.js online");

// creo un piccolo script per rendere il menu sempre visibile

const miniButton = document.getElementById("mini-button");
const menuSpace = document.getElementById("menu-space");

miniButton.addEventListener("click", () => {
    menuSpace.classList.toggle("display-none-custom");
});
