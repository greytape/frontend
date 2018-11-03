// Problem

// - crete function that takes three arguments: an array and a start and end index
// - function returns new array with values from start to end index

// Logic

// - initialise empty array
// - iterate through array with for loop 
// - if arr is >= start index and < end index
//   - add the element at that position to the new array
// - return new array

// Methods

// Code

function slice(array, start, end) {
  if (start > array.length) {
    start = array.length;
  }
  if (end > array.length) {
    end = array.length;
  }
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i >= start && i < end) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// Tests

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// Problem

// - create function that takes array, start index, delete count and other elements as arguments
// - starting from start count it should remove delete count number of elements from the array, and
//   replace them (if there are any) with the optional arguments
// - return removed elements

// Logic

// - initialise empty array
// - iterate through array with for loop, starting at start index
//   - push elements to empty array
// - break when index = start index + delete count
// - iterate through for loop again, starting at start index
//   - set arr[index] to arr[index + delete count]
// - set array length to arr length - delete count

// Methods

  
// Code

function splice(array, startIdx, deleteCount) {
  var result = [];
  copyArray = array
  for (var i = startIdx; i < array.length; i++) {
    if (i === startIdx + deleteCount) {
      break; 
    }
    result.push(array[i]);
  }
  for (var i = startIdx;i < array.length; i++) {
    if (i === startIdx) {}
  }
  return result;
}

// Tests

// console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

// var arr = [1, 2, 3];
// splice(arr, 1, 1, 'two');             // [2]
// arr;                                  // [1, "two", 3]

// var arr = [1, 2, 3];
// splice(arr, 1, 2, 'two', 'three');    // [2, 3]
// arr;                                  // [1, "two", "three"]

// var arr = [1, 2, 3];
// splice(arr, 1, 0);                    // []
// splice(arr, 1, 0, 'a');               // []
// arr;                                  // [1, "a", 2, 3]

// var arr = [1, 2, 3];
// splice(arr, 0, 0, 'a');               // []
// arr;                                  // ["a", 1, 2, 3]
