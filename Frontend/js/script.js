//Boton en registro de quiero ofrecer servicios
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

//aspecto de foto en carrusel para que se mantenga cuadrada
const aspectRatio1to1 = document.querySelectorAll('.aspect-ratio-1-1');

// Funcion para el evento
function resizeForSquareAppearance(event) {
    aspectRatio1to1.forEach((element) => {
        // Modifica la altura a partir de la anchura del elemento
        element.style.height = `${element.clientWidth}px`;
    })
}
window.addEventListener('resize', resizeForSquareAppearance);
document.addEventListener('DOMContentLoaded', resizeForSquareAppearance);

