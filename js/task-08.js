const form = document.querySelector('.login-form');



form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const email = form.elements.email;
    const password = form.elements.password;

    if (email.value === '' && password.value === '') {
        alert('Please enter');
        return;
    }
    const obj = {};

   obj[email.name] = email.value;
   obj[password.name] = password.value;
console.log(obj);

form.reset();

    
})




