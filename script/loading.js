document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.querySelector('.progress-bar::before');
    const percentageElement = document.getElementById('percentage');
    let progress = 0;

    function updateProgress() {
        progress += 1;
        percentageElement.textContent = `${progress}%`;

        if (progress < 100) {
            setTimeout(updateProgress, 50); // Atualiza a porcentagem a cada 50ms
        } else {
            setTimeout(() => {
                window.location.href = 'cadastro-sucesso.html'; // Redireciona para a página de sucesso
            }, 500); // Aguarda 0.5 segundos antes do redirecionamento
        }
    }

    updateProgress();
});
