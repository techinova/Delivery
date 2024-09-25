document.addEventListener('DOMContentLoaded', function () {
    const userIcon = document.querySelector('.user-icon') as HTMLElement | null;
    const dropdownMenu = document.querySelector('.dropdown') as HTMLElement | null;
    const cartIcon = document.querySelector('.cart-icon') as HTMLElement | null;
    const cartPopup = document.querySelector('.cart-popup') as HTMLElement | null;
    const addToCartButtons = document.querySelectorAll('.add-to-cart') as NodeListOf<HTMLButtonElement>;
    const cartItemsContainer = document.querySelector('.cart-items') as HTMLElement | null;

    // Toggle dropdown do usuário
    if (userIcon && dropdownMenu) {
        userIcon.addEventListener('click', function () {
            dropdownMenu.classList.toggle('active');
        });

        document.addEventListener('click', function (event) {
            const target = event.target as Node;
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
            const target = event.target as Node;
            if (!cartIcon.contains(target) && !cartPopup.contains(target)) {
                cartPopup.classList.remove('active');
            }
        });
    }

    // Adicionar item ao carrinho
    if (addToCartButtons && cartItemsContainer) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function () {
                const productCard = button.closest('.product-card');
                const productName = productCard?.querySelector('h2')?.textContent || 'Produto';
                const productPrice = productCard?.querySelector('.price')?.textContent || 'R$ 0,00';

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
    const checkoutButton = document.querySelector('.checkout-button') as HTMLButtonElement | null;
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function () {
            window.location.href = '/html/payment.html';
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const cartPopup = document.getElementById("cart-popup") as HTMLElement;
    const cartIcon = document.querySelector(".cart-icon") as HTMLElement;
    const cartItemsContainer = document.querySelector(".cart-items") as HTMLElement;

    cartIcon.addEventListener("click", () => {
        cartPopup.style.display = "block";
    });

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event: Event) => {
            const productCard = (event.target as HTMLElement).closest(".product-card")!;
            const productName = productCard.querySelector("h3")!.textContent!;
            const productPrice = productCard.querySelector(".price")!.textContent!;
            const cartItem = document.createElement("div");
            cartItem.innerHTML = `<p>${productName} - ${productPrice}</p>`;
            cartItemsContainer.appendChild(cartItem);
        });
    });

    document.getElementById("checkout")?.addEventListener("click", () => {
        window.location.href = "/html/payment.html";
    });
});

