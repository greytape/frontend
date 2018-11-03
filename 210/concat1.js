// Problem

// - create function that takes array and either another array or value as arguments, and returns one 
//   array with all elements from first array plus elements of second argument.

// Logic

// - check if second argument is array
//   - if so, iterate through second argument, adding elements to input array using array indexing ([])
//   - if not, add element to input array

// Methods

// Array.isArray();

// Code

function concat(array, arg2) {
  arrayLength = array.length;
  if (Array.isArray(arg2)) {
    for (idx = 0; idx < arg2.length; idx++) {
      array[arrayLength + idx] = arg2[idx];
    }
  } else {
      array[arrayLength] = arg2;
  }
  return array;
}



// Tests

console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]