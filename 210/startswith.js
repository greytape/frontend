// // Problem

// - create function that takes two strings as arguments
// - if the first string starts with the second string, return true, otherwise return false
// - if secondstring is empty string, return true

// // Logic

// - iterate through n characters of searchstring
//   - if nth character of searchstring doesn't match with string, return false
//   - if function gets to end of searchstring with all matches, return true

// // Methods



// // Code 

function startsWith(string, searchString) {
  searchstringLength = searchString.length
  for (i = 0; i < searchstringLength; i++) {
    if (searchString[i] !== string[i]) {
      return false;
    }
  }
  return true;
}

// Tests

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false