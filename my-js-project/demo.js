
//sort an array without using sort method sort()
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
bubbleSort(numbers);
console.log(numbers);