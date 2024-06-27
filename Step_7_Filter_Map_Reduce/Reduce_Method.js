// Array Declaration
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Applying Reduce method
let mytotal = nums.reduce((preValue, currValue) => {
  //   console.log(`Pre Value : ${preValue} and Curr Value : ${currValue}`);
  return preValue + currValue;
}, 0);
// console.log(mytotal);

// Array Example Two
let shoppingCart = [
  {
    courseName: "JS Course",
    price: 2999,
  },
  {
    courseName: "Java Course",
    price: 1999,
  },
  {
    courseName: "py Course",
    price: 999,
  },
  {
    courseName: "Ruby Course",
    price: 2599,
  },
  {
    courseName: "Data Science Course",
    price: 12999,
  },
];

// Adding Functionality
let totalPrice = shoppingCart.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);
console.log(`Total Price : ${totalPrice}`);
