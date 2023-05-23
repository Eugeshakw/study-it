const inpEl = document.querySelector('#validation-input');
const data = Number(inpEl.getAttribute('data-length'))

inpEl.addEventListener('blur', item => {
    if (item.target.value.length === data) {
        inpEl.classList.add('valid');
        inpEl.classList.remove('invalid');
    } else{
        inpEl.classList.add('invalid');
        inpEl.classList.remove('valid');
    }
})