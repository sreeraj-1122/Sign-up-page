let form = document.getElementById('form');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let number = document.getElementById('number');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    let firstnameValue = firstname.value.trim();
    let lastnameValue = lastname.value.trim();
    let emailValue = email.value.trim();
    let numberValue = number.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    if (firstnameValue === '') {
        setError(firstname, '*First name cannot be blank');
    }
    else {
        setSuccess(firstname);
    }


    if (lastnameValue === '') {
        setError(lastname, '*Last name cannot be blank');
    }
    else {
        setSuccess(lastname);
    }

    if (emailValue === '') {
        setError(email, '*email cannot be blank');
    }
    else {
        setSuccess(email);
    }

    if (numberValue === '') {
        setError(number, '*number cannot be blank');
    }
    else {
        setSuccess(number);
    }

    if (passwordValue === '') {
        setError(password, '*password cannot be blank');
    }
    else if (passwordValue.length < 8){
        setError(password,'*password must be atleast 8 character.')
    }
    else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2,'*password cannot be blank');
    }
    else if (passwordValue.length < 8){
        setError(password2,'*password must be atleast 8 character.')
    }
    else if (password2Value !== passwordValue) {
        setError(password2, '*password does not match')

    }
    else {
        setSuccess(password2);
    }

    function setError(element, message) {
        let inputControl = element.parentElement;
        let errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');

    }

    function setSuccess(element) {
        let inputControl = element.parentElement;
        let errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');

    }

}
