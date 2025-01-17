/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const cherry = {
  name: "Cherry",
  price: 2.99,
  quantity: 0,
  productId: 1,
  image: "images/cherry.jpg"
};

const orange = {
  name: "Orange",
  price: 2.55,
  quantity: 0,
  productId: 2,
  image: "images/orange.jpg"
};

const strawberry = {
  name: "Strawberry",
  price: 1.99,
  quantity: 0,
  productId: 3,
  image: "images/strawberry.jpg"
};

const products = [cherry, orange, strawberry];


/* Declare an empty array named cart to hold the items in the cart */

const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function getProductByIdFromList(productId, productList) {
  return productList.find((product) => product.productId === productId);
}


function addProductToCart(productId){
  let product = getProductByIdFromList(productId, products);
    if (cart.includes(product)) {
      product.quantity++;
    }else {
      cart.push(product);
      product.quantity=1;
    } 
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId){
  let product = getProductByIdFromList(productId, products);
    product.quantity++;
    return;
}


/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId){ 
  let product = getProductByIdFromList(productId, products); 
    if (product.quantity > 1) {
      product.quantity--;
    }else{
      cart.splice(cart.indexOf(product), 1);
      product.quantity = 0;
    }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId){
  let product = getProductByIdFromList(productId, cart);
    product.quantity = 0;
    cart.splice(cart.indexOf(product), 1);
}


/* Create a function named cartTotal that has no parameters
  - cartTotal sehould iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal(){
  let totalSum = 0;
  for (let i = 0; i < cart.length; i++){
    totalSum+= cart[i].price * cart[i].quantity;
  }
  return totalSum;
}
/**function cartTotal(){
  console.log("Before going through cart: " + totalSum);
  for (i = 0; i < cart.length; i++){
    totalSum+= cart[i].price * cart[i].quantity;
  }
  console.log("After going through cart: " + totalSum);
  return ` ${totalSum.toFixed(2)}`;
};**/

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  cart.length = 0;
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

let totalPaid = 0;
function pay (amount){
  let sumToPay = cartTotal();
  totalPaid += amount;
 
  if ( amount < sumToPay){
    return `${totalPaid - sumToPay}`
  }else {
    return  `${totalPaid - sumToPay}`
  }
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
