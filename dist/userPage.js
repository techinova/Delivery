"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const userIcon = document.querySelector('.user-icon');
    const dropdown = document.querySelector('.dropdown');
    if (userIcon && dropdown) {
        userIcon.addEventListener('click', function () {
            dropdown.classList.toggle('active');
        });
        // Fechar o dropdown se clicar fora dele
        document.addEventListener('click', function (event) {
            const target = event.target;
            if (userIcon && dropdown && !userIcon.contains(target) && !dropdown.contains(target)) {
                dropdown.classList.remove('active');
            }
        });
    }
});
