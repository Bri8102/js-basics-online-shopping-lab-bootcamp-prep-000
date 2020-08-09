var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 99 + 1);
 var newItem = {[item]: price};
 console.log(`${item} has been added to your cart.`);
 cart.push(newItem);
 return cart;
}


function viewCart() {

}

function total() {
 
}

function removeFromCart(item) {
 
}

function placeOrder(cardNumber) {
 
}
