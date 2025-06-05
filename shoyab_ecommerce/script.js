// Initialize cart from localStorage or empty
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add product to cart and store in localStorage
function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product} added to cart!`);
  renderCart(); // Safe to call, won't crash if cart section doesn't exist
}

// Render the cart on cart.html
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const totalText = document.getElementById('total');

  if (!cartItems || !totalText) return; // Avoid error on pages without cart section

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalText.textContent = `Total: ₹${total}`;
}

// Checkout function for cart page
function checkout() {
  const paymentMethod = document.getElementById('payment')?.value;
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const methodText = paymentMethod === 'online' ? 'Online Payment' : 'Cash on Delivery';
  alert(`Order placed successfully via ${methodText}!`);

  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

// Contact form submission
function submitForm(event) {
  event.preventDefault();
  alert('Thank you for contacting us!');
}

// Render cart on page load if applicable
window.onload = () => {
  renderCart();
};
