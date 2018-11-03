// Problem

// - create function that takes sorted array of integers as argument
// - function should return a new array of the values (in order) missing in the argument array

// Logic

// - determine if array is going up or down (first value minus last value positive?), set as variable
// - create empty array as returnArray
// - create for loop from first value of argument array to last value
// - if index is found in argument array (#includes()), skip loop
// - else #push() index value to returnArray 
// - return returnArray

// Methods

// #includes()

// Code

function missing(arr) {
  var isAscending = arr[0] - arr[1] < 0;
  var returnArray = [];
  if (isAscending) {
    for (var idx = arr[0]; ; idx++) {
      if (!arr.includes(idx)) {
        returnArray.push(idx);
      }
      if (idx === arr[arr.length - 1]) {
        break;
      }
    }
  } else {
    for (var idx = arr[0]; ; idx--) {
      if (!arr.includes(idx)) {
        returnArray.push(idx);
      }
      if (idx === arr[arr.length - 1]) {
        break;
      }
    }
  }
  return returnArray;
}

// Tests

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
