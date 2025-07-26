// undeclared
//=================
// A variable is undeclared if it has not been declared with an appropriate keyword (i.e. var, let or const). Accessing an undeclared variable will throw a ReferenceError.

// undeclared variables are those that do not exist in program and are not declared. if the program tries to read the value of undeclared valriable. then a runtime error is encountred.

// example 
console.log(message);  // ReferenceError: message is not defined


// undefined
// ========================
// A variable is undefined if it hasn't been assigned a value. undefined is a primitive data type in JavaScript and represents the absence of a value, intentional or otherwise.

// undefined variables are those that are declared in the program but have not been taken any value. if the program tries to read the value of undefined variable, an undefined value is return.   

// example 
var message;
console.log(message); // undefined



// null
// A variable is assigned a value of null like any other value. null is also primitive data type in JavaScript and always represents the intentional absence of a value.

// example

var message = null;
console.log(message); // null

