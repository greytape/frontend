// // Problem

// - create function that takes string as input and returns same string with all uppercase letters
//   replaced with lowercase

// // Logic

// - create empty string (outputString)
// - create new function (#lowercase)
//   - function should take single letter argument and output lowercase version of letter
//   - turn that letter into it's ASCII numeric value (#charCodeAt) and store as variable
//   - add 32 to variable
//   - convert ascii variable to string (#fromCharCode)
// - iterate through input string, adding return value from new function to outputString
// - return outputString

// // Methods

// #charCodeAt();
// #fromCharCode();

// // Code

function toLowerCase(string) {
  var outputString = '';
  for (i = 0; i < string.length; i++) {
    outputString += charToLowerCase(string[i]);
  }
  return outputString;
}

function charToLowerCase(char) {
  var charCode = 0;
  charCode = char.charCodeAt(0);
  if (char >= 'A' && char <= 'Z') {
    charCode += 32;
  }
  return String.fromCharCode(charCode);
}

// Tests

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));     // "abcdef