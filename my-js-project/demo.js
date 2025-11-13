
//sort an array without using sort method sort()
// ---------------------------
function sortGivenArray(arr, order) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((order === "asc" && arr[i] > arr[j]) || (order === "dsc" && arr[i] < arr[j])) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(sortGivenArray([6, 4, 8, 2, 10, 30, 31], "asc"));
console.log(sortGivenArray([6, 4, 8, 2, 10, 30, 31], "dsc"));

//sort an array without using sort method sort()
// ---------------------------

const least_num = (arr) => {
  let smallest = arr[0];
  let smallest_index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index
}


const sortArray = (arr) => {
  const newArr = [];
  while (arr.length) {
    let smallest = least_num(arr);
    console.log(smallest)
    newArr.push(...arr.splice(smallest, 1));
    console.log(arr)
  }
  return newArr;
}

console.log(sortArray([5, 4, 3, 2, 1]));

//using bubble sort
// ---------------------------

function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

var numbers = [12, 10, 15, 11, 14, 13, 16];
console.log(bubbleSort(numbers));

//output : [10, 11, 12, 13, 14, 15, 16]

//sum of two numbers
// ---------------------------

function sum() {
  return a + b;
}
let a = 5;
let b = 10;
sum(a, b)
//output : 15


// is string palindrome
// ---------------------------
//example 1
let str = "Hello World, How are you?";
function isPalindrome() {
  return str === str.split('').reverse().join('');
}
isPalindrome();

//output : false

//example 2
let str1 = "racecar";
function isPalindrome() {
  return str === str.split('').reverse().join('');
}
isPalindrome();
//output : true

// reverse string without create function
// ---------------------------

let string = "Hello World, How are you?";
let reversestr = str.split('').reverse().join('');
console.log(reversestr)
//output : ?uoy era woH ,dlroW olleH

// reverse string with create function
// ---------------------------
let strin = "Hello World, How are you?";
function reverseString() {
  return str.split('').reverse().join('');
}
reverseString();
//ouput : '?uoy era woH ,dlroW olleH'

//find the max number in array
// ---------------------------
let c = [12, 23, 45, 65, 89, 21, 98]
function maxNumber() {
  return Math.max(...c);
}
maxNumber();
//output : 98

//find the max number from given numbers that are not in array
// ---------------------------
let d = (12, 23, 45, 65, 89, 21, 98)
function maxNumber() {
  return Math.max(d);
}
maxNumber();
//output : 98

// note i can not find minimum number when my values are not in array format

//write a program that takes an array of numbers ans return a new array with only even numbers
// ---------------------------
let arr = [12, 23, 45, 65, 86, 21, 98]
function arrOfEvenNumber() {
  return arr.filter(res => res % 2 === 0)
}
arrOfEvenNumber();
//output : [12, 86, 98]

//sum the even elements in array
// ---------------------------

let array = [12, 23, 45, 65, 86, 21, 98]
function sumOfEvenNumber() {
  return array.filter(res => res % 2 === 0).reduce((sum, num) => sum + num, 0)
}
sumOfEvenNumber();
//output : 196

//calculate a factorial of a given number
// ---------------------------
let number = 21;
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
factorial(number);
//output : 51090942171709440000


//is given number prime or not

let qa = 17;
function primeNumber(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) return false;
  }
  return true;
}
primeNumber(qa);
//output : true


//find largest number in nested array
let nestedArray = [12, [23, 45], [65, [101, 21]], 98];
function findLargestElement() {
  // Flatten the array
  let flatArray = nestedArray.flat(Infinity);
  return Math.max(...flatArray);
}
findLargestElement();
//output : 101


// find duplicate number without using predefined function in js
function findDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i]; // Duplicate found
      }
    }
  }
  return null; // No duplicate found
}
// Example usage:
const arr1 = [3, 5, 6, 2, 8, 5, 1];
console.log(findDuplicate(arr1));  // Output: 5


//remove duplicate numbers from array without using any predefined function in js

function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) unique[unique.length] = arr[i];
  }
  return unique;
}
// Example usage:
console.log(removeDuplicates([4, 2, 5, 2, 3, 4, 1, 5]));  // Output: [4, 2, 5, 3, 1]