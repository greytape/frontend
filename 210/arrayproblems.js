// PUSH

// // // Problem

// // - create funciton that will add second argument to the end of thefirst argument (which must be an array)

// // // Logic 

// // - count length of array
// // - set array[array.length + 1] equal to the second argument
// // - return the array 

// // // Methods



// // // Code

// function push (array, newElement) {
//   array[array.length] = newElement;
//   return array; 
// }

// // Tests

// var count = [0,1,2];
// push(count, 3);
// console.log(count);

// POP

// function pop(array) {
//   var lastElement = array[array.length - 1]
//   array.length = array.length - 1;
//   return lastElement;
// }

// var count = [1,2,3,4]

// console.log(pop(count));
// console.log(count);

// UNSHIFT

// function unshift(array, value) {
//   var returnArray = [value];
//   for (i = 0; i < array.length; i++) {
//     returnArray[i + 1] = array[i];
//   }
//   return returnArray;
// }

// console.log(unshift([1,2,3],0));

// SHIFT

function shift(array) {
  firstElement = array[0] 
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  array.length += -1
  return firstElement;
}

array = [1,2,3,4,5]
console.log(array)
console.log(shift(array))
console.log(array)