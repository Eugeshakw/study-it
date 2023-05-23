const form = document.querySelector('.login-form')


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailEl = form.elements.email;
    const passwordEl = form.elements.password;


    if (emailEl.value.trim() === "" || passwordEl.value.trim() ===" ") {
        alert("all fields must be filled in");
        return;
    } 
    const obj = {};
    obj[emailEl.name] = emailEl.value.trim();
    obj[passwordEl.name] = passwordEl.value.trim();
    console.log(obj);
    form.reset();
})
