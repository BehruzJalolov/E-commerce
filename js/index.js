document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.category-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      // category-detail sahifasiga category nomi bilan yo'naltiramiz
      window.location.href = `category-detail.html?category=${category}`;
    });
  });
});
// All tugmasidan tanlanganda category-detail sahifasiga o'tkazish
document.getElementById('categorySelect').addEventListener('change', function () {
  const category = this.value;
  if (category) {
    window.location.href = `./category-detail.html?category=${category}`;
  }
});
document.querySelector('.search-button').addEventListener('click', () => {
  const query = document.querySelector('.search-input').value.trim();
  if (query) {
    window.location.href = `./search-results.html?query=${encodeURIComponent(query)}`;
  }
});
if (filteredProducts.length > 0) {
    document.getElementById('searchResultsTitle').style.display = 'block';
} else {
    document.getElementById('searchResultsTitle').style.display = 'none';
}
// Savatchaga qo‘shish
document.querySelectorAll('.addToCartBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = {
      name: btn.dataset.name,
      price: parseFloat(btn.dataset.price),
      img: btn.dataset.img,
      quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} savatchaga qo‘shildi`);
  });
});

// Card bosilganda shu categoryga olib o‘tish
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const cat = card.dataset.category;
    window.location.href = `/html/category-products.html?category=${cat}`;
  });
});

// Search input
document.getElementById('searchBtn').addEventListener('click', () => {
  const q = document.getElementById('searchInput').value;
  window.location.href = `/html/category-products.html?search=${q}`;
});
// Mahsulotlarni massivda saqlab qo'yamiz
const products = [
  { id: 1, name: "Wireless Headphones", price: 59.99, image: "../image/headphone.png" },
  { id: 2, name: "Smart Watch", price: 89.99, image: "../image/smart watch.png" },
  { id: 3, name: "Bluetooth Speaker", price: 39.99, image: "../image/bluetooth speaker.png" },
  { id: 4, name: "Gaming Mouse", price: 25.99, image: "../image/gaming mause.png" },
];

// Savatni localStorage'dan olish yoki bo'sh massiv yaratish
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Tugmalarga listener qo'shamiz
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const id = parseInt(button.dataset.id);
    const product = products.find(p => p.id === id);

    // Agar mahsulot allaqachon savatda bo'lsa miqdorini oshiramiz
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    // Savatni localStorage ga saqlaymiz
    localStorage.setItem("cart", JSON.stringify(cart));

    // Cart counter ni yangilaymiz
    updateCartCount();
    alert(`${product.name} savatga qo'shildi!`);
  });
});

// Cart counter ni yangilash funksiyasi
function updateCartCount() {
  const cartCount = document.querySelector(".cart-count");
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Sahifa yuklanganda counterni yangilab qo'yamiz
updateCartCount();




