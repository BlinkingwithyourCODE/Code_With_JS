const fileExtension = {
  js: "Javascript",
  py: "Python",
  java: "java",
};
// Using here for-in Loop
for (const key in fileExtension) {
  //   console.log(`${fileExtension[key]} is file extension of ${key}`);
}

let myArray = [1, 2, 3, 4, 5];
for (const key in myArray) {
  //   console.log(`At Index ${key} value is ${myArray[key]}`);
}

// apply loop on MAP
const map = new Map();
map.set("1", "One");
map.set("2", "Two");
map.set("3", "Three");
// map is not iterratable
// Applying for-in Loop
for (const key in map) {
  console.log(map[key]);
}
