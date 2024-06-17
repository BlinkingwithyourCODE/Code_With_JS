// Function Expression
const greet1 = function(name){
    return `Hello ${name}`
}
// Calling function 
// console.log(greet1("Ram"));

// Arrow Function
// Basic Syntax
// const functionName = (Parameter) => expression

const greet2 = (name) => {
    return `Good Morning ${name}`
}
// Calling Function
// console.log(greet2("Sham"));

// Arrow function with Implicit Return
const Arrow1 = userName => `Hello ${userName}`
// Calling Function
// console.log(Arrow1("My Name is BOB"));

// Example on the Implicit arrow function 

// Example One (Adding Two Number)
const addtion = (a, b) => a + b
// console.log(addtion(12,23));

// Example Two (Filtering An Array)
const numbers = [1,2,3,4,5,6,7,8,9,10]
const result1 = numbers.filter(num => num % 2 === 0)
const result2 = numbers.filter(num => num % 2 !== 0)
// console.log(`Even Number : ${result1}`);
// console.log(`Odd Number : ${result2}`);

// Example Three (Mapping an Array)
const num = [1,2,3,4,5,6,7,8,9,10]
const table = num.map(n => n * 2)
// console.log(table);

// Immediately invoked Function
const example = (function(message){
    // console.log(`${message} This is IIFE Function`);
}("Hello"))
// console.log(example);

// Encapsulation in IIFE
var counter = (function(){
     var count = 0
     return {
        increment : function(){
            count++
            return count
        }, 
        decrement : function(){
            count--
            return count
        }}})()

// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());

// Function with Default Parameter
const defaultpara = function(name = "Akash"){
    return `Hello ${name}`
}
// console.log(defaultpara());
// console.log(defaultpara("Ganesh"));

// Function with Rest Parameters
const restPara = function(...names){
    return `My Team is ${names}`
}
console.log(restPara("Ketan", " Snehal", " Prashant", " Vishal"));