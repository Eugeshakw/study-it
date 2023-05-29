function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btn = document.querySelector('.change-color');
const spEl = document.querySelector('.color')

btn.addEventListener('click', () => {
   const color = document.body.style.backgroundColor = getRandomHexColor()
  spEl.textContent = color 
});