// Barcha category-card elementlarini tanlash
const cards = document.querySelectorAll('.category-card');

// Har bir karta ustida bosilganda category-detail.html ga o'tkazish
cards.forEach(card => {
  card.addEventListener('click', () => {
    const category = card.dataset.category;
    window.location.href = `category-detail.html?category=${category}`;
  });
});
