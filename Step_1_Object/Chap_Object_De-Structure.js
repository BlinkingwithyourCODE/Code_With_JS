const course = {
    coursName : "JS",
    price : 2999,
    coursTeacher : "Atish Mhatre"
}

// Object De-Structure
// const {coursName:CN} = course
// console.log(CN);

const person = {
    name : "Ketan",
    age : 25,
    city : "Pune"
}
// Basic De-Structuring 
const {name, age} = person
console.log("Basic De-Structuring");
console.log(`Name : ${name}`);
console.log(`Age : ${age}`)
console.log("--------");

// De-str with rename
console.log("De-Structuring with Rename");
const {name : userName, age : userAge} = person
console.log(`Name : ${userName} and Age : ${userAge}`);
console.log("--------");

// Destructuring with default values: handle missing properties
console.log("Handling missing properties");
const {Message = "Good Morning", profession} = person
console.log(Message, profession);
console.log("--------");

// Destructuring nested objects
console.log("Destructuring nested objects");
const someInfo = {
    state : "MH",
    city : person.city,
    street : "Main Line 123 "
}
const {state, ...allinfo} = someInfo
// console.log(`Stater : ${state}, city :  ${city}, Street ${street}`);
console.log(state, allinfo);