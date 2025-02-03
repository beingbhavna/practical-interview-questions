
// definition

// Hoisting in javascript is a behavior where variable and function declarations are moves to the top of their containing scope during the compilation phase.
// this means that you can use a variable or call a function  even before it is declared in the code.
// there are two types of hoisting 
// 1) variable hoisting
// 2) function hoisting

// example of variable hoisting with var keyword
x = 5;
console.log(x); //output : 5
var x;

// Note : variable hoisting it's valid for 'var' keyword, it's not valid for let, const keyword 

// example of variable hoisting with let,const keyword
x = 5;
console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization
let x;

// OR
console.log(x); // Uncaught ReferenceError: x is not defined
const x = 5;
// -----------------------------------------------------------------



// example of function hoisting
sayHello(); //output : Welcome to the hoisting
function sayHello() {
    console.log("Welcome to the hoisting");
}

//note : this is using only in simple function not in an arrow function 
// example of arrow function
var sayHello = () => {
    console.log("Welcome to the hoisting");
}
sayHello();