const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselPrev
 = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const closeModal = document.querySelector('.close-modal');

let currentItemIndex = 0;
const itemWidth = carouselItems[0].offsetWidth; // Ancho de un elemento

function showSlide(index) {
  carouselTrack.style.transform = `translateX(-${index * itemWidth}px)`;
  currentItemIndex = index;
}

function nextSlide() {
  if (currentItemIndex < carouselItems.length - 2) { // Mostrar hasta el penúltimo para que el último quede a la vista
    showSlide(currentItemIndex + 1);
  }
}

function prevSlide() {
  if (currentItemIndex > 0) {
    showSlide(currentItemIndex - 1);
  }
}

carouselNext.addEventListener('click', nextSlide);
carouselPrev.addEventListener('click', prevSlide);

// Hover y click en imágenes
carouselItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.querySelector('.overlay').style.opacity = 1;
  });
  item.addEventListener('mouseout', () => {
    item.querySelector('.overlay').style.opacity = 0;
  });
  item.addEventListener('click', () => {
    modalTitle.textContent = item.querySelector('img').alt;
    modalDescription.textContent = item.querySelector('img').dataset.description;
    modal.style.display = 'flex';
  });
});

// Cerrar modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Mostrar el primer slide al iniciar
showSlide(currentItemIndex);

let intervalId;

function startCarousel() {
  intervalId = setInterval(() => {
    nextSlide();
  }, 3000); // 3000 milisegundos = 3 segundos
}

function stopCarousel() {
  clearInterval(intervalId);
}

// Iniciar el carrusel al cargar la página
startCarousel();

// Detener el carrusel al pasar el mouse sobre él
carouselTrack.addEventListener('mouseover', stopCarousel);
carouselTrack.addEventListener('mouseout', startCarousel);
