const elements = document.querySelectorAll('.container.msj'); // Selecciona todos los elementos con las clases 'container' y 'mensaje'

elements.forEach((element, index) => {
  element.style.setProperty('--animation-delay', `${index * 3}s`); // Asigna el retraso según el índice del elemento
});