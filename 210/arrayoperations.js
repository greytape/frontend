// // Code

// function indexOf(array, value) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// }

// // Tests

// console.log(indexOf([1, 2, 3, 3], 3));         // 2
// console.log(indexOf([1, 2, 3], 4));            // -1

// Code

function lastIndexOf(array, value) {
  for (var idx = array.length - 1; idx >= 0; idx--) {
    if (array[idx] === value) {
      return idx;
    }
  }
  return -1;
}

// Tests

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1