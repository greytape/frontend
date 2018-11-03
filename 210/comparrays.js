// Code

function arraysEqual(array1, array2) {
  var longestArray = (array1.length >= array2.length) ? array1 : array2;
  for (var idx = 0; idx < longestArray.length; idx++) {
    if (array1[idx] !== array2[idx]) {
      return false;
    }
  }
  return true;
}

// Tests

console.log(arraysEqual([1], [1]));                               // true
console.log(arraysEqual([1], [2]));                               // false
console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false