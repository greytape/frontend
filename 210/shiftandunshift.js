// Problem 

// - create function that removes first element from an array provided as argument and returns it
// - returns undefined if array is empty

// Logic

// - save first element of array as returnVariable
// - assign input array to #slice of input array from [1] to [-1] elements.

// Methods


// Code

function shift (array) {
  var result = array[0];
  array = array.slice(1);
  return result;
}

// Tests

// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

// Problem 

// - create function that takes array and number of arguments
// - function should add the arguments to the array, then return the length of the array

// Logic

// - save number of arguments as variable (minus initial array)
// - iterate through array in for loop
//   - save first element in index position (number of arguments) further along, and so on
// - iterate through arguments in for loop
//   - add each element to array in order
// - return array.length

// Methods

// Code

function unshift() {
  array = arguments[0];
  numOfArguments = (arguments.length - 1);
  for (var i = 0; i < array.length; i++) {
    array[i + numOfArguments] = array[i];
  }
  return array;
}

// Tests

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3
