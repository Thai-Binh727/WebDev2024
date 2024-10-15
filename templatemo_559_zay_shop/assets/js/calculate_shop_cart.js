document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll("#cart-items tr");
    const totalAmountElement = document.querySelector(".cart-summary h3");

    // Function to calculate item total
    function calculateItemTotal(price, quantity) {
        return (price * quantity).toFixed(2);
    }

    // Function to update totals
    function updateTotals() {
        let totalAmount = 0;

        cartItems.forEach(item => {
            const priceElement = item.querySelector(".price");
            const quantityInput = item.querySelector(".quantity");
            const itemTotalElement = item.querySelector(".item-total");

            // Extract price and quantity values
            const price = parseFloat(priceElement.textContent.replace('$', ''));
            const quantity = parseInt(quantityInput.value);

            // Calculate total for each item and update DOM
            const itemTotal = calculateItemTotal(price, quantity);
            itemTotalElement.textContent = `$${itemTotal}`;

            // Add to overall total
            totalAmount += parseFloat(itemTotal);
        });

        // Update total amount in the cart summary
        totalAmountElement.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    }

    // Event listener for quantity change
    cartItems.forEach(item => {
        const quantityInput = item.querySelector(".quantity");

        quantityInput.addEventListener("input", function () {
            if (quantityInput.value < 1) quantityInput.value = 1; // Ensure minimum value of 1
            updateTotals();
        });
    });

    // Initial total calculation
    updateTotals();
});
