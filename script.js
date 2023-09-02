$(document).ready(function() {
  $('.contenedor .campañas').mouseenter(function(e) {
    e.preventDefault();
    $(this).find('.campañas-desplegable').stop().slideDown();
  }).mouseleave(function(e) {
    e.preventDefault();
    $(this).find('.campañas-desplegable').stop().slideUp(300); // Ajusta el tiempo de animación según sea necesario (en milisegundos)
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var campañaElement = document.getElementById("campaña-Id");
  var seccionCampañaElement = document.querySelector(".colecciones");
  var contenidoOcultar = document.querySelectorAll("body > *:not(header):not(footer):not(.encima-del-header)");

  campañaElement.addEventListener("click", function(event) {
    event.preventDefault();

    // Ocultar el contenido entre el header y el footer
    contenidoOcultar.forEach(function(elemento) {
      elemento.style.display = "none";
    });

    // Mostrar la sección de campaña
    seccionCampañaElement.style.display = "block";
  });
});










