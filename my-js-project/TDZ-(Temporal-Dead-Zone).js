
//Defination
//Temporal Dead Zone refers to the time between entering the scope where a variable is declared and the actual declaretion. During this period, accessing the variable results in a ReferenceError. this occurs with variables declared using let and const before they are formally declared in the code.
// example

console.log(message); //reference : message is not defined
let message = "Hello Guys"; // Temporal Dead Zone ends here
console.log(message); //output Hello Guys

