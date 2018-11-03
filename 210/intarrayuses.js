// Code 

function oddElementsOf(arr) {
  var returnArray = [];
  for (var idx = 0; idx < arr.length; idx++) {
    if (idx % 2 !== 0) {
      returnArray.push(arr[idx]);
    }
  }
  return returnArray;
}

// Tests

var digits = [4, 8, 15, 16, 23, 42];

// console.log(oddElementsOf(digits));    // returns [8, 16, 42]

// Code

function combinedArray (arr1, arr2) {
  var returnArray = [];
  for (var idx = 0; idx < arr1.length; idx++) {
    returnArray.push(arr1[idx],arr2[idx]);
  }
  return returnArray;
}

// Tests

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

// console.log(combinedArray(digits, letters));  // returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]

// Code

function mirroredArray(arr) {
  var arrCopy = arr.slice(0);
  return arr.concat(arrCopy.reverse());
}

// Tests

var digits = [1,2,3,4,5];
// console.log(mirroredArray(digits));

// Code

function sortDescending(arr) {
  arrCopy = arr.slice();
  return arrCopy.sort(compareValues);
}

function compareValues(a, b) {
  return b - a;
}

// Tests

var array = [23, 4, 16, 42, 8, 15];
var result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// Code

function matrixSums(arr) {
  var returnArray = [];
  arr.forEach(function(element) {
    returnArray.push(element.reduce(add, 0));  
  });
  return returnArray;
}

function add(a, b) {
  return a + b;
}

// Tests

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

// Code 

function uniqueElements(arr) {
  var returnArray = [];
  for (var idx = 0; idx < arr.length; idx++) {
    if (!returnArray.includes(arr[idx])) {
      returnArray.push(arr[idx]);
    }
  }
  return returnArray;
}

// Tests

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]