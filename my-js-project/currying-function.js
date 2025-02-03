// definition 
// Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument. Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function. That is, when we turn a function call sum(1,2,3) into sum(1)(2)(3) .

// example in previous/older javascript
function adder(a) {
    return function addB(b) {
        return function addC(c) {
            return a + b + c;
        }
    }
}
console.log("Currying Function",adder(4)(5)(6)); //output : Currying Function 15


// example in modern/ES6 javascript with arrow function
var adder =(a)=>(b)=>(c)=>a+b+c
console.log("Currying Function with arrow function",adder(4)(5)(6)); //output : Currying Function 15

// Real life example in previous/older javascript
function mailFormat(to){
    return function mailSubject(subject){
        return function mailBody(body){
           return console.log(`Mail Send to ${to} subject ${subject} with body ${body}`);
        }
    }
}
// let mailWriter = mailFormat;
// mailWriter("bhavna@i2k2.com");
// mailWriter("Currying Function");
// mailWriter("bhavna@i2k2.com");
let step1 = mailFormat("bhavna@i2k2.com");
let step2 = step1("Sending Automatic Email");
let step3 = step2("Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument.")



// Real life example in modern/ES6 javascript with arrow function

var mailFormat =(to)=>(subject)=>(body)=>console.log(`Mail Send to ${to} subject ${subject} with body ${body} with arrow function`)
let step4 = mailFormat("bhavna@i2k2.com");
let step5 = step4("Sending Automatic Email");
let step6 = step5("Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument.")
