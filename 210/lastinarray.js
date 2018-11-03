// function lastInArray(array) {
//   var lastValue = undefined;
//   for (var i = 0; i < array.length; i++) {
//     lastValue = array[i];
//   }
//   return lastValue;
// }

// console.log(lastInArray([1,2,3]))
// console.log(lastInArray(['a','b','c']))
// console.log(lastInArray([true, false, true]))

// function rollCall(namesArray) {
//   for (var i = 0; i < namesArray.length; i++) {
//     console.log(namesArray[i]);
//   }
// }

// rollCall(['Dave', 'Jim', 'Gary']);

// function reverseArray(array) {
//   var returnArray = [];
//   for (var i = array.length - 1; i >= 0; i--) {
//     returnArray.push(array[i]);
//   }
//   return returnArray;
// }

// arr = [1,2,3,4,5];
// console.log(reverseArray(arr));

// function firstIndex(searchTerm, searchSpace) {
//   for (var idx = 0; idx < searchSpace.length; idx++) {
//     if (searchSpace[idx] === searchTerm) {
//       return idx;
//     }
//   }
//   return 'Search term not found';
// }


// console.log(firstIndex('b',['a','b','c']));

function arrayToString(array) {
  var returnString = '';
  for (var idx = 0; idx < array.length; idx++) {
    returnString += array[idx];
  }
  return returnString;
}

console.log(arrayToString([1,'a',3,'b',5,'c',7,8,9]))