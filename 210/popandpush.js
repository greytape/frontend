// Problem

// - create function that removes last element from an array and returns it
// - if array is empty return undefined

// Logic

// - use [] operator to find final element in array and store it as new variable to return
// - alter length of array to one less than before

// Methods

// #[]
// #length

// Code

function pop(array) {
  var arrayLength = array.length
  if (arrayLength === 0) {
    return undefined;
  } 
  var finalElement = array[arrayLength - 1];
  array.length = arrayLength - 1;
  return finalElement;
}

// Tests

// var array = [1, 2, 3];
// console.log(pop(array));                        // 3
// console.log(array);                // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// Problem

// - create function that takes array and a number of elements. 
// - New elements are added to the array, and the function returns the new length of the array

// Logic

// - use argument object, iterate through object adding new elements to the array
// - use [] operator to add new elements to end of array

// Methods

// length
// []

// Code

function push() {
  var array = arguments[0];
  var arrayLength = array.length;
  for (var i = 0; i < arguments.length - 1; i++) {
    array[arrayLength + i] = arguments[i + 1];
  }
  return array.length;
}

// Tests

var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));              // 6
console.log(array);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
