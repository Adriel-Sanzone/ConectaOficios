//Boton en registro
document.addEventListener("DOMContentLoaded", function () {
    const mostrarCamposCheckbox = document.getElementById("mostrarCampos");
    const camposAdicionalesDiv = document.getElementById("camposAdicionales");

    mostrarCamposCheckbox.addEventListener("change", function () {
        if (mostrarCamposCheckbox.checked) {
            camposAdicionalesDiv.style.display = "block";
        } else {
            camposAdicionalesDiv.style.display = "none";
        }
    });
});

//Mostrar u ocultar el menú al hacer clic en el icono de hamburguesa

const mobileMenuButton = document.getElementById("mobile-menu-button");
const menuDiv = document.getElementById("menu");

mobileMenuButton.addEventListener("click", function() {
    menuDiv.classList.toggle("show-menu");
});

// Agregar un listener para cambiar las clases en función del ancho de la ventana
window.addEventListener("resize", function() {
    if (window.innerWidth >= 768) {
        menuDiv.classList.remove("show-menu");
    }
});
