// 1) window object is a global object, we can write window or self or globalThis or this all are same.
// 2) var keyword make a property as a global 
// 3) let,const did not make a property as a global
// 4) we can make a function as a global
// 5) but we can not make a global variable with in a function
// example 
alert("Hello");
window.alert = window.console.log; // here we are override alert function with the console.log

//global variable
var fruit = "apple";


//call

window.alert();
window.alert("say hello")


//global function

function sayHello(){      
    var fruit ="apple"; //this is not a global variable 
}

//call

window.fruit;
window.sayHello().fruit;


// DOM, BOM
// DOM : Document Object Model like 
console.log(document.body);
document.body.style.background = "yellow";

// BOM : Browser Object Model

window.alert();
window.fruit;
window.sayHello().fruit;
prompt("Hello");
location.href = "www.google.com";
