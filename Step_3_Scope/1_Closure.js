// Javascript Using Lexical Scoping
// It conntain Nested Function

// Outer Function
function outerFunction(){
    let message = "Hello I am Outer Function"
    // Inner Function
    function innreFunction(){
        console.log(message);
    }
    return innreFunction;
}
let result = outerFunction()
result()

// Another Examaple
function counter(){
    // Variable
    let count = 0
    return {
        increment : function(){
            count ++
            return count
        },
        decrement : function(){
            count--
            return count
        },
        getCount : function(){
            return count
        }
    }
}
let res = counter()
console.log(res.increment());
console.log(res.increment());
console.log(res.decrement());
console.log(res.getCount());