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
