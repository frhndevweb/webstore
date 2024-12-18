
let cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ productName, price });
    updateCartPopup();
}

function updateCartPopup() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cartItems.forEach(item => {
        const cartItemElement = document.createElement('p');
        cartItemElement.textContent = `${item.productName} - Rp ${item.price.toLocaleString()}`;
        cartItemsContainer.appendChild(cartItemElement);
    });
}

function toggleCartPopup() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = cartPopup.style.display === 'flex' ? 'none' : 'flex';
}

function clearCart() {
    cartItems = [];
    updateCartPopup();
}

function continueToWhatsApp() {
    let message = 'Saya ingin membeli:\n';
    cartItems.forEach(item => {
        message += `${item.productName} - Rp ${item.price.toLocaleString()}\n`;
    });
    window.open(`https://wa.me/+6282241003726?text=${encodeURIComponent(message)}`, '_blank');
}

const demoLinks = {
    portfolio: 'https://frhndevweb.github.io/Portofolio-2',
    blog: 'https://frhndevweb.github.io',
    custom: 'https://frhndevweb.netlify.app'
};

function viewDemo(product) {
    const demoPopup = document.getElementById('demo-popup');
    const demoIframe = document.getElementById('demo-iframe');

    if (demoLinks[product]) {
        demoIframe.src = demoLinks[product];
        demoPopup.style.display = 'block';
    } else {
        alert('Demo untuk produk ini belum tersedia!');
    }
}

function addToCart(productName, price) {
    cartItems.push({ productName, price });
    updateCartPopup();
    alert(`${productName} telah ditambahkan ke keranjang!`);
}

function closeDemoPopup() {
    const demoPopup = document.getElementById('demo-popup');
    const demoIframe = document.getElementById('demo-iframe');

    demoPopup.style.display = 'none';
    demoIframe.src = '';
}
