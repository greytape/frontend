// // Problem

// - take a string and return the string with spaces removed from both ends.
// - don't remove any internal spaces

// // Logic

// - break string into array of characters (#split)
// - iterate through array starting at first character
//   - if it is a space, #shift array
//   - if it is not a space, break out of for loop
// - now iterate through array starting at last character
//   - if it is a space, #pop array
//   - if it is not a space, break out of for loop
// - return array as string (#join)

// // Methods

// #split();
// #shift();
// #pop();
// #join();

// // Code

function trim(string) {
  var array = string.split('');
  var firstChar = ' ';
  var lastChar = ' ';
  while (firstChar === ' ') {
    firstChar = array[0];
    if (firstChar === ' ') {
      array.shift();
    }
  }
  while (lastChar === ' ') {
    lastChar = array[array.length - 1];
    if (lastChar === ' ') {
      array.pop();
    }
  }
  return array.join('');
}

// Tests

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""