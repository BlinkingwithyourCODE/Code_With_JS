// Defining Card / Items
const cart = [
  { name: "Laptop", price: 1000, quantity: 2 },
  { name: "Headphone", price: 500, quantity: 2 },
  { name: "Mobile", price: 800, quantity: 2 },
  { name: "Charger", price: 900, quantity: 2 },
];

// Calculating Subtotal
function calcuateSubTotal(cart) {
  return cart.reduce((subtotal, item) => {
    return subtotal + item.price * item.quantity;
  }, 0);
}

// Applying Discount
function appalyDiscount(subtotal, dis = 0) {
  return subtotal - dis;
}

// Tax rate
function fetchTaxRate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve(0.1);
      } else {
        reject("Failed to fectch the Tax Rate");
      }
    }, 1000);
  });
}

// Calculate total price
async function calculateTotalPrice(cart, discount) {
  try {
    const subtotal = calcuateSubTotal(cart);
    const discountedSubtotal = appalyDiscount(subtotal, discount);
    const taxRate = await fetchTaxRate();
    const totalPrice = discountedSubtotal * (1 + taxRate);

    return totalPrice.toFixed(2);
  } catch (error) {
    console.error(error);
    return "Failed to Calculate Total Error";
  }
}

// Calling Function
const discount = 250;
calculateTotalPrice(cart, discount)
    .then(totalPrice => {console.log(`The Total Price is ${totalPrice}`)})
    .catch(error => {
        console.error("An Error Occured : ", error);
    })
