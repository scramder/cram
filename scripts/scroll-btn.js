document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('scrollButton');
  const sections = document.querySelectorAll('.section');

  // Función que detecta la sección visible y actualiza el botón
  function updateButton() {
      let currentSection = null;
      let nextSection = null;

      // Recorremos todas las secciones para detectar cuál está en la vista
      sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom > 0) {
              currentSection = section;
              // Establecemos la siguiente sección si existe
              nextSection = sections[index + 1] || sections[0]; // Si no hay siguiente, vuelve a la primera
          }
      });

      // Si encontramos una sección visible, actualizamos el enlace del botón
      if (currentSection && nextSection) {
          button.setAttribute('href', `#${nextSection.id}`);
          button.textContent = 'Siguiente';  // Cambia el texto
      }
  }

  // Ejecutamos la función cuando se hace scroll
  window.addEventListener('scroll', updateButton);

  // Actualizamos el botón al cargar la página
  updateButton();
});
