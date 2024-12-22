const sections = document.getElementsByTagName('section');
const button = document.getElementById('navigateButton');
let currentIndex = 0;

button.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sections.length;
  sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
});