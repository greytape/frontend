// // Problem

// - write function that takes two arguments, a string and an input number
// - function should return a string which contains the input string repeated 'input number' times
// - function should return undefined if given:
//   - negative input number
//   - string as input number
//   - boolean or null as input number

// // Logic

// - create empty string (outputstring)
// - create for loop iterating through 1 to inputnumber
//   - add inputstring to empty string at each iteratiaon (#+)
// - return outputstring

// // Methods

// #+

// // Code 

function repeat(string, times) {
  var outputString = '';
  if (times < 0 || typeof times !== 'number') {
    return undefined;
  }
  for (i = 0; i < times; i++) {
    outputString += string;
  }
  return outputString
}

// Tests

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 8));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined