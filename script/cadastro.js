document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step');
    const progress = document.querySelector('.progress');
    let currentStep = 0;

    function updateStep(step) {
        steps.forEach((s, index) => {
            s.classList.toggle('active', index === step);
        });
        progress.style.width = `${(step + 1) / steps.length * 100}%`;
    }

    document.querySelectorAll('.next').forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                updateStep(currentStep);
            }
        });
    });

    document.querySelectorAll('.prev').forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                updateStep(currentStep);
            }
        });
    });

    document.querySelector('.submit').addEventListener('click', function () {
        const senha = document.getElementById('senha').value;
        const confirmaSenha = document.getElementById('confirmaSenha').value;
        if (senha !== confirmaSenha) {
            alert('As senhas não coincidem.');
            return;
        }
        // Simula o carregamento e redireciona após 5 segundos
        document.querySelector('.step').style.display = 'none'; // Opcional: Ocultar o formulário
        const loading = document.createElement('div');
        loading.innerHTML = `
            <h2>Processando...</h2>
            <div class="loading-bar">
                <div class="loading-progress"></div>
            </div>
            <p>Por favor, aguarde.</p>
        `;
        document.body.appendChild(loading);

        let progress = 0;
        const interval = setInterval(() => {
            progress += 2;
            document.querySelector('.loading-progress').style.width = `${progress}%`;
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    window.location.href = 'loading.html';
                }, 500); // Pequeno atraso antes de redirecionar
            }
        }, 100); // Atualiza a barra de progresso a cada 100ms
    });

    updateStep(currentStep);
});
