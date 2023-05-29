const inpEl = document.getElementById('font-size-control');
const spTxt = document.getElementById('text');

inpEl.addEventListener('input', (event) => {
   spTxt.style.fontSize = event.target.value + 'px'; 
})

