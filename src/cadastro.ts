document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step') as NodeListOf<HTMLElement>;
    const progress = document.querySelector('.progress') as HTMLElement | null;
    let currentStep = 0;

    function updateStep(step: number) {
        steps.forEach((s, index) => {
            s.classList.toggle('active', index === step);
        });
        if (progress) {
            progress.style.width = `${(step + 1) / steps.length * 100}%`;
        }
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

    const submitButton = document.querySelector('.submit') as HTMLElement | null;
    if (submitButton) {
        submitButton.addEventListener('click', function () {
            const senha = (document.getElementById('senha') as HTMLInputElement).value;
            const confirmaSenha = (document.getElementById('confirmaSenha') as HTMLInputElement).value;
            if (senha !== confirmaSenha) {
                alert('As senhas não coincidem.');
                return;
            }

            // Simula o carregamento e redireciona após 5 segundos
            const stepElement = document.querySelector('.step') as HTMLElement | null;
            if (stepElement) {
                stepElement.style.display = 'none'; // Opcional: Ocultar o formulário
            }

            const loading = document.createElement('div');
            loading.innerHTML = `
                <h2>Processando...</h2>
                <div class="loading-bar">
                    <div class="loading-progress"></div>
                </div>
                <p>Por favor, aguarde.</p>
            `;
            document.body.appendChild(loading);

            let progressValue = 0;
            const interval = setInterval(() => {
                progressValue += 2;
                const loadingProgress = document.querySelector('.loading-progress') as HTMLElement | null;
                if (loadingProgress) {
                    loadingProgress.style.width = `${progressValue}%`;
                }
                if (progressValue >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        window.location.href = 'loading.html';
                    }, 500); // Pequeno atraso antes de redirecionar
                }
            }, 100); // Atualiza a barra de progresso a cada 100ms
        });
    }

    updateStep(currentStep);
});
