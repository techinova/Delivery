"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.ingredients input[type="checkbox"]');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent || '0') : 0;
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const priceChange = parseFloat(this.dataset.price || '0');
            if (this.checked) {
                totalPrice += priceChange;
            }
            else {
                totalPrice -= priceChange;
            }
            if (totalPriceElement) {
                totalPriceElement.textContent = totalPrice.toFixed(2);
            }
        });
    });
});
