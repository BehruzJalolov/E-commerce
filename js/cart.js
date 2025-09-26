function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cart-container");
  let totalPriceEl = document.getElementById("total-price");

  if (cart.length === 0) {
    container.innerHTML = "<p>Savat bo‘sh 🛒</p>";
    totalPriceEl.innerHTML = "";
    return;
  }

  let total = 0;

  container.innerHTML = cart.map((item, index) => {
    let numericPrice = parseFloat(item.price.replace("$", "")) || 0;
    total += numericPrice * item.quantity;

    return `
      <div class="cart-item" style="display:flex;align-items:center;gap:15px;margin-bottom:15px;">
        <img src="${item.img}" alt="${item.name}" width="80">
        <div>
          <h3>${item.name}</h3>
          <p>Price: ${item.price}</p>
          <div class="quantity">
            <button onclick="updateQuantity(${index}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity(${index}, 1)">+</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  totalPriceEl.innerHTML = `Total: $${total.toFixed(2)}`;
}

function updateQuantity(index, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
