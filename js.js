
const containers = document.querySelectorAll('.dessert-container-1');

containers.forEach(function(container) {
  const img = container.querySelector('.dessert-img');
  const button = container.querySelector('.add-to-cart');
  const originalButtonHTML = button.innerHTML;

  button.dataset.originalHtml = originalButtonHTML;

  function deselectCard() {
    img.classList.remove('selected');
    button.classList.remove('selected-2');
    button.innerHTML = button.dataset.originalHtml;
  }

  function activateStepper() {
    img.classList.add('selected');
    button.classList.add('selected-2');

    button.innerHTML = `
      <img class="decrement" src="assets/images/icon-decrement-quantity.svg" alt="Decrease quantity">
      <span class="quantity">1</span>
      <img class="increment" src="assets/images/icon-increment-quantity.svg" alt="Increase quantity">
    `;

    const quantityDisplay = button.querySelector('.quantity');
    let quantity = 1;

    button.querySelector('.increment').addEventListener('click', function(e) {
      e.stopPropagation();
      quantity++;
      quantityDisplay.textContent = quantity;
    });

    button.querySelector('.decrement').addEventListener('click', function(e) {
      e.stopPropagation();
      quantity--;

      if (quantity <= 0) {
        deselectCard(); // quantity hit 0 — revert the whole card
      } else {
        quantityDisplay.textContent = quantity;
      }
    });
  }

  img.addEventListener('click', activateStepper);
  button.addEventListener('click', activateStepper);
});

document.addEventListener('click', function(e) {
  const clickedInsideACard = e.target.closest('.dessert-container-1');

  if (!clickedInsideACard) {
    document.querySelectorAll('.dessert-img').forEach(function(img) {
      img.classList.remove('selected');
    });

    document.querySelectorAll('.add-to-cart').forEach(function(button) {
      button.classList.remove('selected-2');
      button.innerHTML = button.dataset.originalHtml;
    });
  }
});