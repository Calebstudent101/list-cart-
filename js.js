const cards = document.querySelectorAll('.dessert-img-container');
cards.forEach(card => {
  card.addEventListener('click', function() {
    cards.forEach(c => c.classList.remove('selected'));
    this.classList.add('selected');
  });
});

