
// const containers = document.querySelectorAll('.dessert-container-1');

// containers.forEach(container => {
//   const img = container.querySelector('.dessert-img');
//   const button = container.querySelector('.add-to-cart');

//   function selectThis() {
//     containers.forEach(c => {
//       c.querySelector('.dessert-img').classList.remove('selected');
//       c.querySelector('.add-to-cart').classList.remove('selected');
//     });
//     img.classList.add('selected');
//     button.classList.add('selected');
//   }

//   img.addEventListener('click', selectThis);
//   button.addEventListener('click', selectThis);
// });


// const button = document.querySelector('.add-to-cart');

// button.addEventListener('click', function() {
//   button.classList.add('selected-2');
//   button.innerHTML = `
//     <img class="decrement" src="assets/images/icon-decrement-quantity.svg" alt="Decrease quantity">
//     <span class="quantity">1</span>
//     <img class="increment" src="assets/images/icon-increment-quantity.svg" alt="Increase quantity">
//   `;

//   const quantityDisplay = button.querySelector('.quantity');
//   let quantity = 1;

  
//   button.querySelector('.increment').addEventListener('click', function(e) {
    
//     e.stopPropagation();
//     quantity++;
//     quantityDisplay.textContent = quantity;
//   });

//   button.querySelector('.decrement').addEventListener('click', function(e) {
//     e.stopPropagation();
//     if (quantity > 1) {
//       quantity--;
//       quantityDisplay.textContent = quantity;
//     }
//   });
// });

// document.addEventListener('click', function(e) {
//   const clickedInsideACard = e.target.closest('.dessert-container-1');

//   if (!clickedInsideACard) {
//     document.querySelectorAll('.dessert-img').forEach(function(img) {
//       img.classList.remove('selected');
//     });

//     document.querySelectorAll('.add-to-cart').forEach(function(button) {
//       button.classList.remove('selected-2');
//     });
//   }
// });