// Code

function firstElementOf(arr) {
  return arr[0];
}

// Tests

// console.log(firstElementOf(['U', 'S', 'A']));  // returns "U"

// Code

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

// Tests

// console.log(lastElementOf(['U', 'S', 'A']));  // returns "A"

// Code

function nthElementOf(arr, index) {
  return arr[index];
}

// Tests

var digits = [4, 8, 15, 16, 23, 42];

// console.log(nthElementOf(digits, 3));   // returns 16
// console.log(nthElementOf(digits, 8));   // what does this return?
// console.log(nthElementOf(digits, -1));  // what does this return?

// Code

function firstNOf(arr, count) {
  var returnArray = [];
  for (var idx = 0; idx < count; idx++) {
    returnArray.push(arr[idx]);
  }
  return returnArray;
}

// Tests

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

// Code

function lastNOf(arr, count) {
  if (count > arr.length) {
    count = arr.length;
  }
  return arr.slice(arr.length - count);
}

// Tests

var digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 3));    // returns [16, 23, 42]

// Code

function endsOf(array1, array2) {
  return [array1[0],array2[array2.length - 1]];
}

// Tests

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]