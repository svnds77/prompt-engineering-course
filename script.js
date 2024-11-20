
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Спасибо за регистрацию! Мы свяжемся с вами по email.');
    });
});
