// For Loop
for (let index = 1; index <= 10; index++) {
  //   console.log(index);
}

// Loop Inside Loop
for (let i = 1; i <= 10; i++) {
  // Outer Loop
  //   console.log(`Table of : ${i}`);
  for (let j = 1; j <= 10; j++) {
    // Inner Loop
    // console.log(`Inner Loop : ${j}`);
    // Table Printing
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Loop on Array
let myArray = ["Flash", "Batman", "SuperMan"];
for (let index = myArray.length - 1; index >= 0; index--) {
  const element = myArray[index];
  //   console.log(`At Index ${index} Value is : ${element}`);
}

// Break and Continue Keyword
for (let i = 1; i <= 20; i++) {
  console.log("Value is : " + i);
  if (i == 10) {
    continue;
  }
  //console.log(i); this line can't print the 10 Because condition is true it directly jmup to the next value
}
