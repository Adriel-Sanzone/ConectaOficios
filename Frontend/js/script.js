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

//oculta containers en perfil
const iconos = document.querySelectorAll('.icono-perfil'); // Obtén todos los elementos con la clase .icono
const contenedoresInfo = document.querySelectorAll('.contenedor-info'); // Obtén todos los elementos con la clase .contenedor-info

// Agrega un evento de clic a cada icono
iconos.forEach((icono, index) => {
    icono.addEventListener('click', () => {
        if (contenedoresInfo[index].style.display === 'none' || contenedoresInfo[index].style.display === '') {
            contenedoresInfo[index].style.display = 'block';
        } else {
            contenedoresInfo[index].style.display = 'none';
        }
    });
});


