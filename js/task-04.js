


const spEl = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
let value = 0;

btnDecrement.addEventListener('click', onbtnfunct);
btnIncrement.addEventListener('click', offbtnfunct);
function onbtnfunct() {
   spEl.textContent = value -= 1;
}

function offbtnfunct() {
   spEl.textContent = value += 1;
   
}


