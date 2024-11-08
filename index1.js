function addToCart() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('productPrice').innerText.replace('$', ''));
    const total = (quantity * price).toFixed(2);

    document.getElementById('cartDetails').innerText = `Product Name x${quantity}`;
    document.getElementById('totalPrice').innerText = `Total Price: $${total}`;
    
    alert("Product added to cart!");
}

function buyNow() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('productPrice').innerText.replace('$', ''));
    const total = (quantity * price).toFixed(2);

    alert(`Thank you for your purchase! \n\nProduct Name x${quantity}\nTotal Price: $${total}`);
}