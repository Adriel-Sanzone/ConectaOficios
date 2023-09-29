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



// JavaScript para mostrar el formulario
function mostrarFormulario() {
    var formulario = document.getElementById('formulario-editar');
    formulario.style.display = 'block';
    console.log('Mostrar formulario'); // Agrega esta línea para verificar si se llama la función
}

// JavaScript para cerrar el formulario
function cerrarFormulario() {
    var formulario = document.getElementById('formulario-editar');
    formulario.style.display = 'none';
}

function EditarFotos() {
    var formulario = document.getElementById('editar-fotos');
    formulario.style.display = 'block';
    console.log('Mostrar formulario'); // Agrega esta línea para verificar si se llama la función
}

// JavaScript para cerrar el formulario
function CerrarFotos() {
    var formulario = document.getElementById('editar-fotos');
    formulario.style.display = 'none';
}

function FormularioTrabajos() {
    const FormularioTrabajos = document.getElementById("FormularioTrabajos");
    FormularioTrabajos.style.display = "block";
}

function CerrarTrabajos() {
    var formulario = document.getElementById('FormularioTrabajos');
    formulario.style.display = 'none';
}


// BARRA
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const suggestions = document.getElementById("suggestions");

    // Lista de categorías
    const categorias = ["Plomero", "Electricista", "Pintor", "Jardinero", "Gasista"];

    // Función para mostrar las sugerencias
    function showSuggestions() {
        suggestions.innerHTML = "";
        const inputValue = searchInput.value.toLowerCase();

        categorias.forEach((categoria) => {
            if (categoria.toLowerCase().includes(inputValue)) {
                const listItem = document.createElement("li");
                listItem.classList.add("list-group-item");
                listItem.textContent = categoria;
                listItem.addEventListener("click", () => {
                    // Redirige a la página de oficios
                    window.location.href = `oficios?categoria=${encodeURIComponent(categoria)}`;
                });
                suggestions.appendChild(listItem);
            }
        });

        if (suggestions.children.length > 0) {
            suggestions.style.display = "block";
        } else {
            suggestions.style.display = "none";
        }
    }

    // Evento para el campo de entrada (keyup)
    searchInput.addEventListener("keyup", showSuggestions);

    // Evento para ocultar las sugerencias cuando se hace clic en cualquier parte de la página
    document.addEventListener("click", function (event) {
        if (event.target !== searchInput && event.target !== suggestions) {
            suggestions.style.display = "none";
        }
    });
});

// FIN BARRA



