const openButtons = document.querySelectorAll('.button');
const modalContainer = document.getElementById('modalContainer');
const modal = document.getElementById('modal');
const modalText = document.querySelector('.modalText');
const closeButton = document.getElementById('closeButton');

openButtons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.getAttribute('data-text');
        modalText.textContent = buttonText;
        modalContainer.style.display = 'flex';
    });
});

closeButton.addEventListener('click', function() {
    modalContainer.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginContainer = document.querySelector('.login-container');
    const body = document.querySelector('body');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const predefinedUsername = 'crazyani';
        const predefinedPassword = 'aniandabhi';
        if (username === predefinedUsername && password === predefinedPassword) {
            body.classList.remove('blur-background');
            setTimeout(function() {
                loginContainer.style.display = 'none';
            }, 500);
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    });
});
