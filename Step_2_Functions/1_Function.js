// Function
function message (){
    // console.log("Good Morning");
}
// Function Call
message()

// Function Two (Definition)
function addTwoNumber(a ,b){
    // return a + b
}
const addFunction = addTwoNumber(10, 20)
// console.log(addFunction);

function userMessage (username) {
    if(!username){
        console.log("Please enter UserName");
        return
    }
    else {
        return `${username} just Loggedin`
    }
}
const message1 = userMessage()
console.log(message1);