// Mahsulotlar ro'yxati
const products = [
  {
    id: 1,
    name: "Anne Klein Women's Leather Strap Watch",
    price: 150,
    desc: "Elegant design, durable leather strap, water resistant up to 50m. Perfect for both casual and formal occasions.",
    img: "../image/starp watch.png",
    features: ["Water Resistant", "Genuine Leather", "2-Year Warranty", "Swiss Movement"]
  },
  {
    id: 2,
    name: "Soundcore Anker Life Q20 Headphones",
    price: 199.99,
    desc: "Hybrid Active Noise Cancelling Headphones with 60H Playtime, Hi-Res Audio, and deep bass technology.",
    img: "../image/headphone.png",
    features: ["Noise Cancelling", "60H Battery", "Wireless", "Hi-Res Audio"]
  },
  {
    id: 3,
    name: "Samsung Galaxy Tab A9+ Tablet",
    price: 299.99,
    desc: "11-inch Android tablet with quad speakers, upgraded chipset, and multi-window display support.",
    img: "../image/tablet.png",
    features: ["11-inch Display", "Quad Speakers", "64GB Storage", "Android OS"]
  },
  {
    id: 4,
    name: "ASUS ROG Raikiri Pro Controller",
    price: 179.99,
    desc: "Professional gaming controller with OLED display, tri-mode connectivity, and customizable buttons.",
    img: "../image/jostik.png",
    features: ["OLED Display", "Wireless", "Customizable", "PC/Xbox"]
  },
  {
    id: 5,
    name: "Logitech Z207 Stereo Speakers",
    price: 79.99,
    desc: "2.0 stereo computer speakers with Bluetooth connectivity and rich, clear sound quality.",
    img: "../image/calonca.png",
    features: ["Bluetooth", "Stereo Sound", "Compact Design", "Easy Setup"]
  }
];

// URL dan id ni olish
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

// Product detail chiqarish
const product = products.find(p => p.id === productId);

if (product) {
  document.getElementById("product-detail").innerHTML = `
    <div class="detail-container">
      <div class="product-image">
        <img src="${product.img}" alt="${product.name}" class="img-fluid">
      </div>
      <div class="product-info">
        <h1>${product.name}</h1>
        <div class="price">$${product.price}</div>
        <p>${product.desc}</p>
        
        <div class="features">
          <h3>🔥 Key Features</h3>
          <ul>
            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
        
        <div class="buy-section">
          <button class="buy-btn" onclick="addToCart(${product.id})">🛒 Add to Cart</button>
          <button class="buy-btn" style="background: var(--secondary-gradient)">❤️ Add to Wishlist</button>
        </div>
      </div>
    </div>
  `;
} else {
  document.getElementById("product-detail").innerHTML = `
    <div class="error-container" style="text-align: center; padding: 60px;">
      <h2>Product Not Found</h2>
      <p>The product you're looking for doesn't exist.</p>
      <a href="./electronics.html" class="btn btn-outline-primary">Back to Products</a>
    </div>
  `;
}

// Related products chiqarish
const related = products.filter(p => p.id !== productId);

if (product) {
  document.getElementById("related-products").innerHTML = `
    <section class="related">
      <h2>🚀 Related Products</h2>
      <div class="related-grid">
        ${related.map(p => `
          <a href="electronic-detail.html?id=${p.id}" class="related-card">
            <img src="${p.img}" alt="${p.name}">
            <h4>${p.name}</h4>
            <div class="price">$${p.price}</div>
            <span>View Details</span>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

// ✅ YANGI: To'g'ri addToCart funksiyasi
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        alert('Mahsulot topilmadi!');
        return;
    }

    // Savatni olish yoki yangi savat yaratish
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Mahsulot savatda bormi?
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        // Agar bor bo'lsa, sonini oshiramiz
        existingItem.quantity += 1;
    } else {
        // Yangi mahsulot qo'shamiz
        cart.push({
            id: product.id,
            name: product.name,
            price: `$${product.price}`,
            img: product.img,
            quantity: 1
        });
    }
    
    // Savatni saqlaymiz
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Animation va bildirishnoma
    const btn = event.target;
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '✅ Added!';
    btn.style.background = 'var(--secondary-gradient)';
    btn.disabled = true;
    
    // Savat sonini yangilash
    updateCartCount();
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = 'var(--primary-gradient)';
        btn.disabled = false;
    }, 2000);
    
    console.log('Savat yangilandi:', cart);
}

// ✅ YANGI: Savat sonini yangilash
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Cart count elementini yangilash (agar mavjud bo'lsa)
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// ✅ YANGI: Sahifa yuklanganda savat sonini yangilash
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Page load animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});