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

// este script es al pedo pq en reseñas no hay que seleccionar las estrellas
// pero puede servir para despues pq quedo lindo :)
const estrellas = document.querySelectorAll('.icono-estrella');

estrellas.forEach((estrella, index) => {
    estrella.addEventListener('click', () => {
        const currentColor = estrella.getAttribute('data-color');

        // Si la estrella actual está seleccionada, desmarcar todas las estrellas
        if (currentColor === '#FF6723') {
            for (let i = 0; i < estrellas.length; i++) {
                estrellas[i].style.color = '#737373';
                estrellas[i].setAttribute('data-color', '#737373');
            }
        } else {
            // Marcar la estrella actual y las anteriores
            for (let i = 0; i <= index; i++) {
                estrellas[i].style.color = '#FF6723';
                estrellas[i].setAttribute('data-color', '#FF6723');
            }
        }
    });
});



