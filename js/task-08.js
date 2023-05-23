const form = document.querySelector('.login-form')


form.addEventListener('submit', event =>{
    event.preventDefault();
    const emailEl = form.elements.email;
    const passwordEl = form.elements.password;
    if(emailEl.value.trim() === '' || passwordEl.value.trim() === '') {
        alert('Please enter')
        return
    }
        const obj = {}
    obj.email = emailEl.value;
    obj.password = passwordEl.value;
    console.log(obj);
    form.reset();
    

});
