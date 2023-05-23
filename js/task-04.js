const btnDec = document.querySelector('[data-action="decrement"]')
const btnInc = document.querySelector('[data-action="increment"')
const spEl = document.querySelector('#value');
let value = 0;


btnDec.addEventListener('click', () =>{
   spEl.textContent = value -= 1;
})

btnInc.addEventListener('click', () =>{
spEl.textContent = value += 1;
});


