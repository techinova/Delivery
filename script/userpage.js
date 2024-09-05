// user.js

document.addEventListener('DOMContentLoaded', function () {
    const userIcon = document.querySelector('.user-icon');
    const dropdown = document.querySelector('.dropdown');

    userIcon.addEventListener('click', function () {
        dropdown.classList.toggle('active');
    });

    // Fechar o dropdown se clicar fora dele
    document.addEventListener('click', function (event) {
        if (!userIcon.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
});
