// URL'dan category nomini olish
const params = new URLSearchParams(window.location.search);
const category = params.get('category');

// Sarlavhani chiqarish
const titleEl = document.getElementById('categoryTitle');
titleEl.textContent = category ? category : 'Category';

// Har bir kategoriya uchun namunaviy mahsulotlar
const productsByCategory = {
  electronics: [
    {name: 'Smartphone', img: '../image/smartphone.png'},
    {name: 'tv', img: '../image/tv.png'},
    {name: 'Headphones', img: '../image/Headphones.png'}
  ],
  fashion: [
    {name: 'T-shirt', img: '../image/T-shirt.png'},
    {name: 'Jeans', img: '../image/Jeans.png'},
    {name: 'Shoes', img: '../image/Shoes.png'}
  ],
  gaming: [
    {name: 'noutbook', img: '../image/laptop.png'},
    {name: 'Pc', img: '../image/pc.png'},
    {name: 'phone', img: '../image/phone.png'}
  ],
  books: [
    {name: 'Books', img: '../image/books.png'},
    
  ],
  home: [
    {name: 'standart', img: '../image/standart.png'},
    {name: 'vip+', img: '../image/vip+.png'},
    {name: 'biznes', img: '../image/biznes.png'}
  ],
};

const productList = document.getElementById('productList');

if (category && productsByCategory[category]) {
  productsByCategory[category].forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
    `;
    productList.appendChild(card);
  });
} else {
  productList.innerHTML = `<p>Bu kategoriya uchun mahsulotlar topilmadi.</p>`;
}


