function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cart-container");
  let totalPriceEl = document.getElementById("total-price");

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <h3>Savat bo'sh 🛒</h3>
        <p>Hali hech narsa qo'shmagansiz</p>
        <a href="./index.html" class="btn btn-outline-primary">Mahsulotlarga o'tish</a>
      </div>
    `;
    totalPriceEl.innerHTML = "";
    return;
  }

  let total = 0;

  container.innerHTML = cart.map((item, index) => {
    let numericPrice = parseFloat(item.price.replace("$", "")) || 0;
    let itemTotal = numericPrice * item.quantity;
    total += itemTotal;

    return `
      <div class="cart-item" style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px; padding: 20px; background: var(--glass-bg); border-radius: 15px; backdrop-filter: blur(10px);">
        <img src="${item.img}" alt="${item.name}" width="100" style="border-radius: 10px;">
        <div style="flex: 1;">
          <h3 style="margin: 0 0 10px 0; color: var(--text-dark);">${item.name}</h3>
          <p style="margin: 0 0 10px 0; font-weight: bold; color: #00ff88;">${item.price}</p>
          <div class="quantity" style="display: flex; align-items: center; gap: 10px;">
            <button onclick="updateQuantity(${index}, -1)" style="padding: 8px 15px; border: none; background: var(--primary-gradient); color: white; border-radius: 8px; cursor: pointer;">-</button>
            <span style="font-weight: bold; min-width: 30px; text-align: center;">${item.quantity}</span>
            <button onclick="updateQuantity(${index}, 1)" style="padding: 8px 15px; border: none; background: var(--primary-gradient); color: white; border-radius: 8px; cursor: pointer;">+</button>
            <button onclick="removeFromCart(${index})" style="padding: 8px 15px; border: none; background: #ff4444; color: white; border-radius: 8px; cursor: pointer; margin-left: 10px;">🗑️</button>
          </div>
          <p style="margin: 10px 0 0 0; font-weight: bold;">Jami: $${itemTotal.toFixed(2)}</p>
        </div>
      </div>
    `;
  }).join("");

  totalPriceEl.innerHTML = `
    <div style="text-align: center; padding: 20px; background: var(--glass-bg); border-radius: 15px; margin-top: 20px;">
      <h3>Umumiy summa: $${total.toFixed(2)}</h3>
      <button onclick="checkout()" style="padding: 12px 30px; border: none; background: var(--secondary-gradient); color: white; border-radius: 10px; cursor: pointer; font-size: 16px; font-weight: bold;">💳 Buyurtma berish</button>
    </div>
  `;
}

function updateQuantity(index, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

function checkout() {
  alert('Buyurtmangiz uchun rahmat! Tez orada siz bilan bog\'lanamiz.');
  localStorage.removeItem('cart');
  renderCart();
  updateCartCount();
}

// ✅ YANGI: Savat sonini yangilash
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  const cartCountElement = document.querySelector('.cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = totalItems;
  }
}

// Sahifa yuklanganda ishga tushirish
document.addEventListener('DOMContentLoaded', function() {
  renderCart();
  updateCartCount();
});