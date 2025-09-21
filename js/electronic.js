// Mahsulotlar ro'yxati
const products = [
  {
    id: 1,
    name: "Wrist Watch",
    price: 150,
    desc: "Anne Klein Women's Leather Strap Watch. Elegant design, durable strap, water resistant.",
    img: "../image/starp watch.png"
  },
  {
    id: 2,
    name: "HeadPhone",
    price: 200,
    desc: "Soundcore Anker Life Q20 Hybrid Active Noise Cancelling Headphones, Wireless Over Ear Bluetooth Headphones, 60H Playtime, Hi-Res Audio, Deep Bass, Foam Ear Cups, Travel, Office, USB-C Charging",
    img: "../image/headphone.png"
  },
  {
    id: 3,
    name: "Samsung Galaxy Tab",
    price: 300,
    desc: "Samsung Galaxy Tab A9+ Tablet 11” 64GB Android Tablet, Big Screen, Quad Speakers, Upgraded Chipset, Multi Window Display, Slim, Light, Durable Design, US Version, 2024, Graphite",
    img: "../image/tablet.png"
  },
  {
    id: 4,
    name: "ASUS ROG Raikiri Pro",
    price: 800,
    desc: "ASUS ROG Raikiri Pro OLED Display, tri-Mode connectivity, remappable Buttons&triggers, 4 Rear Buttons, Step&Linear triggers, Adjustable Joystick Sensitivity, 3.5mm Jack with ESS DAC, for PC and Xbox",
    img: "../image/jostik.png"
  },
   {
    id: 5,
    name: "Logitech Z207 2.0 Stereo Computer",
    price: 800,
    desc: "Logitech Z207 2.0 Stereo Computer Speakers with Bluetooth",
    img: "../image/calonca.png"
  }
];

// URL dan id ni olish
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

// Product detail chiqarish
const product = products.find(p => p.id === productId);

if (product) {
  document.getElementById("product-detail").innerHTML = `
    <div class="row">
      <div class="col-md-6">
        <img src="${product.img}" class="img-fluid rounded">
      </div>
      <div class="col-md-6">
        <h2>${product.name}</h2>
        <p><strong>Price:</strong> $${product.price}</p>
        <p>${product.desc}</p>
        <button class="btn btn-success">Add to Cart</button>
      </div>
    </div>
  `;
} else {
  document.getElementById("product-detail").innerHTML = "<p>Product not found!</p>";
}

// Related products chiqarish
const related = products.filter(p => p.id !== productId);

document.getElementById("related-products").innerHTML = `
  <h3>Other Electronics</h3>
  <div class="row">
    ${related.map(p => `
      <div class="col-md-3">
        <div class="card p-2">
          <img src="${p.img}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">$${p.price}</p>
            <a href="electronic-detail.html?id=${p.id}" class="btn btn-outline-primary">View</a>
          </div>
        </div>
      </div>
    `).join("")}
  </div>
`;
