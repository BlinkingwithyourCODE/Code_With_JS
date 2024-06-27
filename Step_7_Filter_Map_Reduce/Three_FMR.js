// Array Declaration
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Applying Map Method
let updatedNums = nums
  .map((item) => {
    return item + 10;
  })
  .filter((data) => {
    return data % 2 === 0 && data > 16;
  });
console.log(updatedNums);
