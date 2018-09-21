// // Problem

// - write function that takes two arguments. A string and a delimiting character.
// - it should log to the console the elements of the string
// - the function should log each element of the string on a new line
// - each elements should be separated based on the delimiter supplied
// - if no delimiter is supplied function should log: 'ERROR: No delimiter'
// - if the delimiter occurs before any characters, function should log: '(this is a blank line)'

// // Logic

// - iterate through the string
// - create an empty array (array)
// - create a variable (currentArrayElement) and set it to 0
// - if the current character is not the delimiter
//   - add the character to array([currentArrayElement])
// - if the current character === the delimiter
//   - currentArrayElement += 1
// - once finished iterating through the string, iterate through array
// - log each element of the array to the console


// // Methods
// // Code 

function splitString(string, delimiter) {
  var array = [];
  var currentArrayElement = 0;
  if (delimiter === undefined) {
    return array = ['ERROR: No delimiter']; 
  }
  for (i = 0; i < string.length; i++) {
    if (delimiter === '') {
      array[currentArrayElement] = string[i];
      currentArrayElement += 1;
    } else if (array[currentArrayElement] === undefined && string[i] === delimiter) {
      array[currentArrayElement] = '(this is a blank line)';
      currentArrayElement += 1;
    } else if (string[i] === delimiter) {
      currentArrayElement += 1;
    } else {
      if (array[currentArrayElement] === undefined) {
        array[currentArrayElement] = string[i];
      } else {
        array[currentArrayElement] += string[i];
      }      
    }
  }
  return array;
}

// Tests

console.log(splitString('abc,123,hello world', ','));
// logs:
// abc
// 123
// hello world

console.log(splitString('hello'));
// // logs:
// // ERROR: No delimiter

console.log(splitString('hello', ''));
// // logs:
// // h
// // e
// // l
// // l
// // o

console.log(splitString('hello', ';'));
// // logs:
// // hello

console.log(splitString(';hello;', ';'));
// // logs:
// //  (this is a blank line)
// // hello