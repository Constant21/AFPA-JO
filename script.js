const myForm = document.getElementById('myForm');
const result = document.querySelector('.result');
const lastName = document.getElementById('name');
const firstName = document.getElementById('firstName');

myForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const firstNameValue = firstName.value;
    const nameValue = lastName.value;
    verifyFirstName(firstNameValue);
});

const verifyFirstName = (firstNameValue) => {

    if(firstNameValue.length < 3) {
        console.log('error');
        return false;
    }
}