const buttons = document.querySelectorAll('.select-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.product-card');
    const product = {
      name: card.dataset.name,
      price: card.dataset.price
    };

    const selected = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    selected.push(product);

    localStorage.setItem('selectedProducts', JSON.stringify(selected));
    alert(product.name + " tanlandi!");
  });
});
