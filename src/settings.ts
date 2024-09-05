document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.querySelector('.back-button') as HTMLElement | null;

    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = 'userpage.html';
        });
    }
});
