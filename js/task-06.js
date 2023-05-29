const inpEl = document.getElementById('validation-input');
const data = Number(inpEl.getAttribute('data-length'))


inpEl.addEventListener('blur', () => {
    if(inpEl.value.length === data) {
        inpEl.classList.add('valid');
        inpEl.classList.remove('invalid');
    }
    else {
       
        inpEl.classList.add('invalid');
        inpEl.classList.remove('valid'); 
    }       
})

// inpEl.addEventListener('blur', (event) => {
//     if(parseInt(inpEl.dataset.length) === inpEl.value.length){
//         inpEl.classList.add('valid');
//         inpEl.classList.remove('invalid');
//     }
//     else {
       
//         inpEl.classList.add('invalid');
//         inpEl.classList.remove('valid'); 
//     }       
// })