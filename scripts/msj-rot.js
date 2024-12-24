const elements = document.querySelectorAll('.container.msj'); // Selecciona todos los mensajes
let currentIndex2 = 0; // Índice del mensaje actual

function showNextMessage() {
  // Oculta el mensaje actual
  elements[currentIndex2].classList.remove('active');

  // Incrementa el índice al siguiente mensaje (o regresa al primero)
  currentIndex2 = (currentIndex2 + 1) % elements.length;

  // Muestra el nuevo mensaje
  elements[currentIndex2].classList.add('active');
}

// Inicializar mostrando el primer mensaje
elements[currentIndex2].classList.add('active');

// Cambiar mensaje cada 3 segundos
setInterval(showNextMessage, 3000);