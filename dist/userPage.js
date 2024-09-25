"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const userIcon = document.querySelector('.user-icon');
    const dropdownMenu = document.querySelector('.dropdown');
    const cartIcon = document.querySelector('.cart-icon');
    const cartPopup = document.querySelector('.cart-popup');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    // Toggle dropdown do usuário
    if (userIcon && dropdownMenu) {
        userIcon.addEventListener('click', function () {
            dropdownMenu.classList.toggle('active');
        });
        document.addEventListener('click', function (event) {
            const target = event.target;
            if (!userIcon.contains(target) && !dropdownMenu.contains(target)) {
                dropdownMenu.classList.remove('active');
            }
        });
    }
    // Toggle popup do carrinho
    if (cartIcon && cartPopup) {
        cartIcon.addEventListener('click', function () {
            cartPopup.classList.toggle('active');
        });
        document.addEventListener('click', function (event) {
            const target = event.target;
            if (!cartIcon.contains(target) && !cartPopup.contains(target)) {
                cartPopup.classList.remove('active');
            }
        });
    }
    // Adicionar item ao carrinho
    if (addToCartButtons && cartItemsContainer) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function () {
                var _a, _b;
                const productCard = button.closest('.product-card');
                const productName = ((_a = productCard === null || productCard === void 0 ? void 0 : productCard.querySelector('h2')) === null || _a === void 0 ? void 0 : _a.textContent) || 'Produto';
                const productPrice = ((_b = productCard === null || productCard === void 0 ? void 0 : productCard.querySelector('.price')) === null || _b === void 0 ? void 0 : _b.textContent) || 'R$ 0,00';
                const itemCard = document.createElement('div');
                itemCard.className = 'cart-item-card';
                itemCard.innerHTML = `
                    <h4>${productName}</h4>
                    <p>Preço: ${productPrice}</p>
                `;
                cartItemsContainer.appendChild(itemCard);
            });
        });
    }
    // Redirecionar para a página de pagamento
    const checkoutButton = document.querySelector('.checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function () {
            window.location.href = '/html/payment.html';
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    const cartPopup = document.getElementById("cart-popup");
    const cartIcon = document.querySelector(".cart-icon");
    const cartItemsContainer = document.querySelector(".cart-items");
    cartIcon.addEventListener("click", () => {
        cartPopup.style.display = "block";
    });
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productCard = event.target.closest(".product-card");
            const productName = productCard.querySelector("h3").textContent;
            const productPrice = productCard.querySelector(".price").textContent;
            const cartItem = document.createElement("div");
            cartItem.innerHTML = `<p>${productName} - ${productPrice}</p>`;
            cartItemsContainer.appendChild(cartItem);
        });
    });
    (_a = document.getElementById("checkout")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        window.location.href = "/html/payment.html";
    });
});
