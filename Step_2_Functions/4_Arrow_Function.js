const user = {
     username : "Ketan",
     price : 2000,
     // Declaring One Method
     welcomeMessage : function(){
          console.log(`${this.username}, Welcome to Website`);
          console.log(this); // This print all the values in the function also changed values
     }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); // This Print the empty object 

function thisFunction(){
     let username = "Jay Shree Ram"
     console.log(this.username); // It print the Undefined Beacuse the this Keyword is not working in the function => Output is Undefined
}
// thisFunction()

// Arrow funtion declaration
// Explaicit Return
const addNum = (num1, num2) => {
     return num1 + num2
}
console.log("Addition is : ", addNum(10, 20));

// Implicit Funtion
const multipication = (val1, val2) => (val1 * val2)
console.log(`Multiplication : ${multipication(10, 10)}`);

// React Use function => Remember this
const message = () => ({username : "Ketan"})
console.log(message());