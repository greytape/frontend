// // Problem

// - create function that takes three arguments: a string, a starting index and a length
// - function should return substring from string of given length starting a given index point
// - if starting index is negative, treat it as a starting index of 0 and reduce the length of the 
//   substring accordingly
// - 

// // Logic

// - create new empty string (returnString)
// - create new variable (stringLengthCount), set to 0
// - iterate through string with for loop
// - when element index >= starting index
//   - add 1 to stringLengthCount 
//   - add element to empty string
//   - check if length of returnString === inputLength
//     - if so, return returnString

// // Methods

// #length

// // Code 

function substr(string, start, length) {
  var returnString = '';
  if (start < 0) {
    start = string.length + start;
  }
  for (i = 0; i <= string.length; i++) {
    if (i >= start && !!string[i]) {
      returnString += string[i];
    }
    if (returnString.length === length) {
      return returnString;
    }
  }
  return returnString;
}

// Tests

var string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""

