const products = {
  electronics: [
    { name: "Wireless Headphones", price: "$59.99", img: "../image/headphone.png" },
    { name: "Smart Watch", price: "$89.99", img: "../image/smart watch.png" }
  ],
  fashion: [
    { name: "Men's Jacket", price: "$49.99", img: "../image/jacket.png" }
  ],
  books: [
    { name: "JavaScript for Beginners", price: "$19.99", img: "../image/js-book.png" },
    { name: "Python Mastery", price: "$25.99", img: "../image/python-book.png" }
  ],
  home: [
    { name: "Kitchen Blender", price: "$29.99", img: "../image/blender.png" }
  ],
  gaming: [
    { name: "Gaming Laptop", price: "$899.99", img: "../image/gaming-laptop.png" },
    { name: "Gaming PC", price: "$1299.99", img: "../image/gaming-pc.png" },
    { name: "Gaming Phone", price: "$699.99", img: "../image/gaming-phone.png" },
    { name: "Gaming Mouse", price: "$25.99", img: "../image/gaming-mouse.png" }
  ]
};

const params = new URLSearchParams(window.location.search);
const query = params.get('query').toLowerCase();
const container = document.getElementById('search-results');

// Barcha mahsulotlar ichidan qidirish
let found = [];
Object.keys(products).forEach(category => {
  products[category].forEach(item => {
    if (item.name.toLowerCase().includes(query)) {
      found.push(item);
    }
  });
});

// Natijani chiqarish
if (found.length === 0) {
  container.innerHTML = `<p>Hech qanday mahsulot topilmadi.</p>`;
} else {
  found.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p class="price">${item.price}</p>
      <button>Add to Cart</button>
    `;
    container.appendChild(card);
  });
}
