document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll<HTMLInputElement>('.ingredients input[type="checkbox"]');
    const totalPriceElement = document.getElementById('total-price') as HTMLElement | null;
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent || '0') : 0;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function(this: HTMLInputElement) {
            const priceChange = parseFloat(this.dataset.price || '0');
            if (this.checked) {
                totalPrice += priceChange;
            } else {
                totalPrice -= priceChange;
            }
            if (totalPriceElement) {
                totalPriceElement.textContent = totalPrice.toFixed(2);
            }
        });
    });
});
