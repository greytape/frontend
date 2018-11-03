// Problem

// - create function that takes string as input and outputs the integer equivalent value

// Logic

// - create array of string numeric values '0' - '9'
// - create empty array
// - iterate through input string, use each character as argument for indexOf called on array of string
//   numerics, then #push the resulting integer into the empty array
// - once complete, iterate backwards through array of integers. multiply by 1, then by 10 and so on 
//   and add results together
// - return summed result

// Methods

// #indexOf()
// #push

// Code

function stringToSignedInteger(string) {
  var INTEGERARRAY = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var stringArray = [];
  var returnValue = 0;
  var multiple = 1;
  var posneg = 1

  if (string[0] === '-') {
    string = string.substring(1);
    posneg = -1;
  } else if (string[0] === '+') {
    string = string.substring(1);
  }

  for (var idx = 0; idx < string.length; idx++) {
    stringArray.push(INTEGERARRAY.indexOf(string[idx]));
  }

  for (var idx = stringArray.length - 1; idx >= 0; idx--) {
    returnValue += (stringArray[idx] * multiple);
    multiple *= 10; 
  }
  return returnValue * posneg;
}

// Tests

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100