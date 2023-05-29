const inpEl = document.getElementById('font-size-control');
const spTxt = document.getElementById('text');

inpEl.addEventListener('input', (evt) => {
   spTxt.style.fontSize = evt.target.value + 'px';
})

