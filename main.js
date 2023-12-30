const form = document.querySelector('form');
const uname = document.querySelector('#username');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');
const details = document.querySelector('#details');
const obj = {
    "username": 'password',
    'harsha': '1234',
    'vardan': '1234'
}
details.addEventListener('click', () => {
    str = JSON.stringify(obj);
    alert(str)
})
const checkInput = () => {
    const username = uname.value.trim();
    const pword = password.value;
    const err = true;
    for (let name in obj) {
        if (username === name) {
            if (pword === obj[name]) {
                window.location.href = "./calorieCounter/calorieForm.html";
                err = false;
            }
        }
    }
    if (err) {
        form.className = 'error';
    }

}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    checkInput();
})