const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');
const spEL = document.getElementById('value');
let value = 0;


btnDec.addEventListener('click', () => {
   spEL.textContent = value -= 1;
});

btnInc.addEventListener('click', () => {
   spEL.textContent = value += 1;
});


