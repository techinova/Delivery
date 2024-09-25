"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.querySelector(".btn-save");
    saveButton.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Informações salvas com sucesso!");
    });
    const editAddressButton = document.querySelector(".btn-edit-address");
    editAddressButton.addEventListener("click", () => {
        alert("Função de editar endereço ainda não implementada.");
    });
    const editPaymentButton = document.querySelector(".btn-edit-payment");
    editPaymentButton.addEventListener("click", () => {
        alert("Função de editar pagamento ainda não implementada.");
    });
});
