// Array
const coding = ["js", "java", "python", "c", "cpp", "golang"];

// Applying the for-each loop on the array

coding.forEach(function someData(item) {
  //   console.log(item);
});

coding.forEach((value) => {
  //   console.log(`Array Item : ${value}`);
});

// Declare the function seperately and pass the function to the foreach loop
function printMe(data) {
  console.log(data);
}
// ForEach Loop
// console.log("Data in Array : ");
// coding.forEach(printMe);

// Looking the all property of the forEach loop Array
coding.forEach((data, index) => {
  console.log(`Value ${data} at Index ${index}`);
});
