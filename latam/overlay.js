const projectCards = document.querySelectorAll('.project-card');
const projectOverlays = document.querySelectorAll('.project-overlay');
const closeOverlayButtons = document.querySelectorAll('.close-overlay');

// Función para mostrar el overlay
function showOverlay(overlayId) {
  const overlay = document.getElementById(overlayId);
  overlay.style.display = 'flex';
}

// Función para ocultar el overlay
function hideOverlay(overlayId) {
  const overlay = document.getElementById(overlayId);
  overlay.style.display = 'none';
}

// Agregar evento click a las tarjetas de proyectos
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const overlayId = card.dataset.projectId ? `overlay-${card.dataset.projectId}` : null; 
    if (overlayId) {
      showOverlay(overlayId);
    }
  });
});

// Agregar evento click a los botones de cierre
closeOverlayButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita que el clic se propague al overlay
    const overlayId = button.parentElement.parentElement.id;
    hideOverlay(overlayId);
  });
});
