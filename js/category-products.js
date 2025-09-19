// Demo product data
const products = [
  { id: 1, category: 'gaming', title: 'Gaming Laptop', price: 1200, img: 'https://via.placeholder.com/300x200?text=Gaming+Laptop' },
  { id: 2, category: 'gaming', title: 'Gaming Mouse', price: 60, img: 'https://via.placeholder.com/300x200?text=Gaming+Mouse' },
  { id: 3, category: 'books', title: 'JavaScript Book', price: 25, img: 'https://via.placeholder.com/300x200?text=JS+Book' },
  { id: 4, category: 'books', title: 'HTML & CSS Book', price: 20, img: 'https://via.placeholder.com/300x200?text=HTML+Book' },
  { id: 5, category: 'cleaning', title: 'Cleaning Mop', price: 15, img: 'https://via.placeholder.com/300x200?text=Cleaning+Mop' },
  { id: 6, category: 'cleaning', title: 'Cleaning Gloves', price: 5, img: 'https://via.placeholder.com/300x200?text=Cleaning+Gloves' },
];

const params = new URLSearchParams(window.location.search);
const category = params.get('category');
const search = params.get('search');

const grid = document.getElementById('productGrid');
const pageTitle = document.getElementById('pageTitle');

let filtered = products;

if (category) {
  pageTitle.textContent = `Results for ${category}`;
  filtered = products.filter(p => p.category === category);
} else if (search) {
  pageTitle.textContent = `Results for "${search}"`;
  filtered = products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
}

if (filtered.length === 0) {
  grid.innerHTML = '<p>No products found.</p>';
} else {
  grid.innerHTML = filtered.map(p => `
    <div class="card">
      <img src="${p.img}" alt="${p.title}">
      <div class="info">
        <h3>${p.title}</h3>
        <p>$${p.price}</p>
      </div>
    </div>
  `).join('');
}
