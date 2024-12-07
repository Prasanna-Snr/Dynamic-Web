// --------------------------------for cart------------------------------
function updateQuantity(button, change) {
    const quantityElement = button.parentNode.querySelector('.cart-quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity += change;

    if (quantity < 1) {
        quantity = 1;
    }

    quantityElement.textContent = quantity;
    updateTotal(button.closest('.cart-item'));
}

function updateTotal(item) {
    const price = parseFloat(item.querySelector('td:nth-child(2)').textContent.replace('Rs.', '').trim());
    const quantity = parseInt(item.querySelector('.cart-quantity').textContent);
    const total = price * quantity;
    item.querySelector('.cart-total').textContent = `Rs.${total.toFixed(2)}`;
    updateCartTotal();
}

function updateCartTotal() {
    const allItems = document.querySelectorAll('.cart-item');
    let cartTotal = 0;

    allItems.forEach(item => {
        const itemTotal = parseFloat(item.querySelector('.cart-total').textContent.replace('Rs.', '').trim());
        cartTotal += itemTotal;
    });

    document.getElementById('cart-total-price').textContent = `Rs.${cartTotal.toFixed(2)}`;
}

function removeItem(button) {
    const item = button.closest('.cart-item');
    item.remove();
    updateCartTotal();
}

function checkout(){
    window.location.href="checkout.html"
}



