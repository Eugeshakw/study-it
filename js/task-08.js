const form = document.querySelector('.login-form');



form.addEventListener('submit', event =>{
    event.preventDefault();
    const emailEL = event.target.elements.email;
    const passwordEL = event.target.elements.password;
    
    if (emailEL.value.trim() === '' || passwordEL.value.trim() === '') {
        alert('Please enter');
        return;
    }
    const obj = {}
    obj.email = emailEL.value
    obj.password = passwordEL.value

    console.log(obj);
    form.reset();
});
