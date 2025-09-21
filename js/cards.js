// Mahsulotlar ro'yxati
const products = [
  { id: 1, name: "Wrist Watch", price: 150, img: "../image/starp watch.png" },
  { id: 2, name: "Smart Watch", price: 200, img: "../image/starp watch.png" },
  { id: 3, name: "Tablet", price: 300, img: "../image/starp watch.png" },
  { id: 4, name: "Laptop", price: 800, img: "../image/starp watch.png" }
];

// Savatni olish yoki bo'sh array yaratish
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Tugmalarga listener qo'shish
document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // link ichida bo‘lsa sahifa qayta yuklanmasin
    const id = parseInt(btn.dataset.id);
    const product = products.find(p => p.id === id);

    if (product) {
      // Agar savatda bor bo'lsa miqdorini oshiramiz
      let existing = cart.find(item => item.id === id);
      if (existing) {
        existing.qty++;
      } else {
        cart.push({ ...product, qty: 1 });
      }

      // localStorage ga saqlash
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(product.name + " savatga qo'shildi!");
    }
  });
});
