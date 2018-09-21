// // Problem

// - Create function that takes string as input and returns string with each character moved thirteen
//   positions further ahead in the alphabet.
// - Letter transformations should preserve case
// - Non alphabetic characters should be returned untouched

// // Logic

// - initialise empty string variable as return_string
// - iterate through input string
// - if character is non-alphabetic, add to return_string
// - else, turn character into ASCII code.
// - if code is between 65 and 90
//   - add 13 to code
//   - if code is now greater than 90
//     - subtract 26 from code
// - if code is between 97 and 122
//   - if code is now greater than 122
//     - subtract 26 from code
// - convert code to character and add to return_string

// // Methods 

// #charCodeAt();
// #String.fromCharCode;

// // Code

function rot13(string) {
  var returnString = '';
  var lowerCaseLimit = 122
  var upperCaseLimit = 90
  var ROTATOR = 13
  var ALPHABETSIZE = 26

  for (var idx = 0; idx < string.length; idx++) {
    var charCode = string.charCodeAt(idx);
    if (!isUpperCase(charCode) && isLowerCase(charCode)) {
      returnString += string[idx];
      continue;
    } 

    var upperCase = isUpperCase(charCode);
    charCode += ROTATOR;

    if (charCode > upperCaseLimit && upperCase || charCode > lowerCaseLimit) {
      charCode -= ALPHABETSIZE;
    } 

    returnString += String.fromCharCode(charCode);
  }
  return returnString;
}

function isUpperCase(charCode) {
  return (charCode >= 65 && charCode <= 90;
}
function isLowerCase(charCode) {
  return (charCode >= 97 && charCode <= 122;
}



// Tests

console.log(rot13(rot13('ABCDEFGHIJKLNOPQRSTUVWXYZ')));

// // // logs:
// // Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('abcdefghijklmnopqrstuvwxyz')));

// // logs:
// Teachers open the door, but you must enter by yourself.