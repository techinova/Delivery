document.addEventListener('DOMContentLoaded', function () {
    const userIcon = document.querySelector('.user-icon') as HTMLElement | null;
    const dropdown = document.querySelector('.dropdown') as HTMLElement | null;

    if (userIcon && dropdown) {
        userIcon.addEventListener('click', function () {
            dropdown.classList.toggle('active');
        });

        // Fechar o dropdown se clicar fora dele
        document.addEventListener('click', function (event) {
            const target = event.target as Node;
            if (userIcon && dropdown && !userIcon.contains(target) && !dropdown.contains(target)) {
                dropdown.classList.remove('active');
            }
        });
    }
});
