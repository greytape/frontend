// // Code

// function slice(array, start, end) {
//   var returnArray = [];
//   for (var idx = 0; idx < array.length; idx++) {
//     if (idx >= start && idx < end) {
//       push(returnArray, array[idx]);
//     }
//   }
//   return returnArray
// }

// function push (array, newElement) {
//   array[array.length] = newElement;
//   return array; 
// }

// // Tests

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

// Code

// function splice(array, start, spliceSize) {
//   var returnArray = [];
//   for (var idx = start; idx < array.length; idx++) {
//     if (idx + spliceSize < spliceSize + (array.length - 1)) {
//       push(returnArray, array[idx]);
//       array[idx] = array[idx + spliceSize];
//     }
//   }
//   array.length = array.length - spliceSize;
//   return returnArray;
// }



// // Tests

// var count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count); 

// // Code 

// function concat(array1, array2) {
//   var returnArray = [];
//   for (var idx = 0; idx < array1.length; idx++) {
//     push(returnArray, array1[idx]);
//   }
//   for (var idx = 0; idx < array2.length; idx++) {
//     push(returnArray, array2[idx]);
//   }
//   return returnArray;
// }

// function push (array, newElement) {
//   array[array.length] = newElement;
//   return array; 
// }

// // Tests

// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

// Code 

function join (array, separator) {
  var returnString = '';
  for (var idx = 0; idx < array.length; idx++) {
    returnString += array[idx];
    if (idx < array.length - 1) {
      returnString += separator;
    }
  }
  return returnString;
}

// Tests

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'