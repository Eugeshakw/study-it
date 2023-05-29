const inpEL = document.getElementById('name-input');
const spEl = document.getElementById('name-output');

inpEL.addEventListener('input', (event) => {
spEl.textContent = event.currentTarget.value ? 
event.currentTarget.value 
: spEl.textContent = 'Anonymous'  

});