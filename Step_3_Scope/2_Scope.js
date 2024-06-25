// Scope Variable
// {} this method is we can use for the Scope
// They can be accessed from anywhere in the code.
// Global Scope => Outside this {} called Global Scope


let a = 1000; // It's hold the Global Scope
if (true) {
  let a = 10; // It's hold the Local Scope
  const b = 20;
  // console.log("Inner : ", a);
}

// console.log(a);
// console.log(b);
// console.log(a);

// Local Scope => Inside this {} called Local Scope
// Local scope refers to variables that are declared within a function or a block. 
// These variables are not accessible outside their respective scope.

// Function scope
function localScopeExample(){
  let scopeVariable = "Hello All!" 
  return scopeVariable
}
// console.log(scopeVariable);
// console.log(localScopeExample());

// Shadwoing of Scope
let shadowScope = "Outer Var"
function shadowVsriable(){
  let shadowScope = "Inner Var"
  return shadowScope 
}
shadowVsriable()
// console.log(shadowScope);

// Hoisting 
// console.log(message);
var message = "Hello Team!"
// console.log(messageOne);
// let messageOne = "Hello All!" => Same with const keyword

// Temporal Dead Zone
{
  let tdzlet = "I am in Temporal Dead Zone"
  const tdzconst = "I am also in Temporal Dead zone"

  // console.log(tdzlet);
  // console.log(tdzconst);
}

// Another Function
function One(){
  let parant = "I am Parant"
  function Two(){
    let child = "I am Child"
    console.log(parant);
  }
  // console.log(child);
  console.log("You can't access the Child variable outside of it's Scope");
  Two()
}
// One()

// ++++++++++++++++++ Interesting +++++++++++++++
function addOne(num){
  return num + 1
}
addOne()

// Declaring Function Expression
const addTwo = function(num){
  return num + 2
}
addTwo()
// console.log(addTwo(10));