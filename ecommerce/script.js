let cart = [];

function addToCart(productName, description, price) {
    cart.push({ productName, description, price });
    alert(`${productName} has been added to the cart.`);
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '<h2>Shopping Cart</h2>';
    
    if (cart.length === 0) {
        cartDiv.innerHTML += '<p>Your cart is empty.</p>';
    } else {
        cartDiv.innerHTML += '<ul>';
        cart.forEach(item => {
            cartDiv.innerHTML += `<li>${item.productName} - ${item.description} - $${item.price}</li>`;
        });
        cartDiv.innerHTML += '</ul>';
    }
}

function viewCart() {
    displayCart();
}
