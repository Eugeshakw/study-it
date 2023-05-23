function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnEl = document.querySelector('.change-color');
const spEl = document.querySelector('.color');

btnEl.addEventListener('click', item => {
  document.body.style.backgroundColor = getRandomHexColor();
  spEl.textContent = document.body.style.backgroundColor;
});