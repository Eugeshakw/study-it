const inpEL = document.querySelector('#font-size-control');
const spEl = document.querySelector('#text');


inpEL.addEventListener('input', event => {
    spEl.style.fontSize = event.currentTarget.value + 'px';
})

