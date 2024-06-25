// for of Loop
const arr = [1, 0, 5, 0, 7, 5, 4, 0, 4];
let zeroCount = 0;
for (const number of arr) {
  if (number == 0) {
    zeroCount++;
  }
}
// console.log(zeroCount);

// Print throught the string
let name = "Hello World";
for (const ch of name) {
  if (ch == " ") {
    break;
  }
  //   console.log(`Each Char : ${ch}`);
}

// maps
const map = new Map();
map.set("IN", "India");
map.set("UK", "Unikted Kingdom");
map.set("FR", "France");
// console.log(map);

// Apply For-of loop on Map Function
for (const [key, value] of map) {
  //   console.log(key + " => " + value);
}

// Object Declaration
const myObject = {
  game1: "NFS",
  game2: "BGMI",
  game3: "Ludo",
};
// Applting for-of Loop on Object
for (const [key, value] of object) {
  // console.log(key + " => " + value);
}

