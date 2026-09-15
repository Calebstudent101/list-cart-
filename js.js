// const cards = document.querySelectorAll('.dessert-img');
// cards.forEach(card => {
//   card.addEventListener('click', function() {
//     cards.forEach(c => c.classList.remove('selected'));
//     this.classList.add('selected');
//   });
// });

// const carding = document.querySelectorAll('.add-to-cart');
// carding.forEach(cardo => {
//   cardo.addEventListener('click', function() {
//     carding.forEach(f => f.classList.remove('selected'));
//     this.classList.add('selected');
//   });
// });

const containers = document.querySelectorAll('.dessert-container-1');

containers.forEach(container => {
  const img = container.querySelector('.dessert-img');
  const button = container.querySelector('.add-to-cart');

  function selectThis() {
    containers.forEach(c => {
      c.querySelector('.dessert-img').classList.remove('selected');
      c.querySelector('.add-to-cart').classList.remove('selected');
    });
    img.classList.add('selected');
    button.classList.add('selected');
  }

  img.addEventListener('click', selectThis);
  button.addEventListener('click', selectThis);
});
