const inpEl = document.querySelector('#name-input');
const spEL = document.querySelector('#name-output');

inpEl.addEventListener('input', (item) => { 
 
   spEL.textContent = item.currentTarget.value ? item.currentTarget.value : 'Anonymous'
   
})