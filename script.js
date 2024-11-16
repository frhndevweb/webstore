let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        alert(productName + " sudah ada di keranjang.");
        return;
    }

    cart.push({ name: productName, price: price });
    alert(productName + " has been added to your cart.");
    localStorage.setItem('cart', JSON.stringify(cart));

    updateButtonStatus();
    displayCart();
}

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

    if (savedCart.length === 0) {
        cartItemsContainer.innerHTML = '<p>No items in the cart.</p>';
        return;
    }

    savedCart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `Product: ${item.name} | Price: Rp${item.price.toLocaleString()}`;
        cartItemsContainer.appendChild(itemElement);
    });
}

function clearCart() {
    cart = [];
    localStorage.removeItem('cart');
    alert('Keranjang telah dikosongkan.');
    displayCart();
    updateButtonStatus();
}

function continueToWhatsApp() {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (savedCart.length === 0) {
        alert('Keranjang kosong. Tambahkan produk terlebih dahulu.');
        return;
    }

    let message = 'Halo, saya ingin memesan produk berikut:%0A';
    savedCart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - Rp${item.price.toLocaleString()}%0A`;
    });

    const waNumber = '+6282324473889';
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

    window.open(waLink, '_blank');
}

function updateButtonStatus() {
    const buttons = document.querySelectorAll('.add-to-cart-button');
    buttons.forEach(button => {
        const productName = button.getAttribute('data-product-name');
        if (cart.some(item => item.name === productName)) {
            button.textContent = 'Added';
            button.disabled = true;
            button.classList.add('added');
        } else {
            button.textContent = 'Add to Cart';
            button.disabled = false;
            button.classList.remove('added');
        }
    });
}

function viewDemo(productType) {
    let demoUrl;
    switch (productType) {
        case 'portofolio':
            demoUrl = 'https://portofolio-2-five.vercel.app';
            break;
        case 'blog':
            demoUrl = 'https://frhndevweb.github.io';
            break;
        case 'custom':
            demoUrl = 'https://frhndevweb.netlify.app';
            break;
        default:
            alert('Demo tidak tersedia.');
            return;
    }
    window.open(demoUrl, '_blank');
}

displayCart();
updateButtonStatus();
