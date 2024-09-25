document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.querySelector(".btn-save") as HTMLButtonElement;

    saveButton.addEventListener("click", (event: Event) => {
        event.preventDefault();
        alert("Informações salvas com sucesso!");
    });

    const editAddressButton = document.querySelector(".btn-edit-address") as HTMLButtonElement;
    editAddressButton.addEventListener("click", () => {
        alert("Função de editar endereço ainda não implementada.");
    });

    const editPaymentButton = document.querySelector(".btn-edit-payment") as HTMLButtonElement;
    editPaymentButton.addEventListener("click", () => {
        alert("Função de editar pagamento ainda não implementada.");
    });
});
