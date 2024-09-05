document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.ingredients input[type="checkbox"]');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = parseFloat(totalPriceElement.textContent);

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const priceChange = parseFloat(this.dataset.price);
            if (this.checked) {
                totalPrice += priceChange;
            } else {
                totalPrice -= priceChange;
            }
            totalPriceElement.textContent = totalPrice.toFixed(2);
        });
    });
});
