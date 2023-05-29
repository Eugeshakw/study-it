const inpEl = document.getElementById('validation-input');



inpEl.addEventListener('blur', () => {
    const amount = inpEl.value.length;
    const reqAmount = Number(inpEl.dataset.length);

    if(amount === reqAmount) {
       inpEl.classList.add('valid') 
       inpEl.classList.remove('invalid')
    }else{
        inpEl.classList.add('invalid') 
        inpEl.classList.remove('valid')
    }
        
})

