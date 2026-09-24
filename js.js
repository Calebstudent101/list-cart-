
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
  const priceText = container.querySelector('.dessert-info-container p:nth-child(3)').textContent;
  const price = parseFloat(priceText.replace('$', ''));

  function calculateDessertPrice(price, quantity){
    return price * quantity;
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
    let itemTotal = calculateDessertPrice(price, quantity);
    console.log(itemTotal);

    button.querySelector('.increment').addEventListener('click', function(e) {
      e.stopPropagation();
      quantity++;
      quantityDisplay.textContent = quantity;
      itemTotal = calculateDessertPrice(price, quantity);
      console.log(itemTotal);
    });

    button.querySelector('.decrement').addEventListener('click', function(e) {
      e.stopPropagation();
      quantity--;

      if (quantity <= 0) {
        deselectCard(); // quantity hit 0 — revert the whole card
      } else {
        quantityDisplay.textContent = quantity;
        itemTotal = calculateDessertPrice(price, quantity);
        console.log(itemTotal);
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

function createCartItemHTML(name, quantity, price) {
  const subtotal = price * quantity;

  return `
    <div class="cart-item">
      <div class="cart-item-details">
        <p class="cart-item-name">${name}</p>
        <div class="cart-item-meta">
          <span class="cart-item-qty">${quantity}x</span>
          <span class="cart-item-price">@ $${price.toFixed(2)}</span>
        </div>
      </div>
      <span class="cart-item-subtotal">$${subtotal.toFixed(2)}</span>
    </div>
  `;
}


let cart = [];

