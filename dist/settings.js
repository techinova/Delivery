"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function () {
            window.location.href = 'userpage.html';
        });
    }
});
