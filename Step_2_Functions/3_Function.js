// Higher-Order Function
// Function that takes another function as an argument
function greet(name, callback){
    const message = `Hello! ${name}`
    callback(message)
}
function logMessage (msg){
    console.log(msg);
}
// greet("Jack Mertin", logMessage)

// Anonymous Function
// Using an anonymous function as a callback
// const AnanomousFunction = setInterval(function(){
    // console.log("This runs in 1 Min!");
// }, 1000);

// Recursive Function
// Function that calls itself
function factorial(n){
    if(n === 0){
        return 1
    }else{
        return n * factorial(n - 1)
    }
}
console.log(factorial(5));