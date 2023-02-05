const button = document.querySelector('.button');
const element = document.querySelector('.element');

button.addEventListener('click', () => {
  element.classList.toggle('active');
});