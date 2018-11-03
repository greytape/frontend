// Problem

// - create function that takes either string or array as argument and returns new string/array with 
//   order of elements reversed

// Logic

// - determine if argument is string or variable
// - have two conditional branches in the logic accordingly
// - set returnString/Array to null
// - use for loop to iterate through argument in reverse order
// - each time add element to returnString/Array
// - return returnString/Array

// Methods

// Array.isArray()
// String.isString()

// Code

function reverse(input) {
  if (typeof input === 'string') {
    var returnString = '';
    for (var idx = input.length - 1; idx >= 0; idx--) {
      returnString = returnString + input[idx];
    }
    return returnString;
  } else if (Array.isArray(input)) {
    var returnArray = [];
    for (var idx = input.length - 1; idx >= 0; idx--) {
      returnArray.push(input[idx]);
    }
    return returnArray;
  }
}


// Tests


console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]