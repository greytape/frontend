// // Problem

// - write two functions, that each take two arguments. indexOf() and lastIndexOf()
// - one is a string, the other a substring. The function should search the string for the substring.
// - indexOf() should return the index of where the first occurence of the substring starts
// - lastIndexOf() should return the index of where the last occurence of the substring starts
// - if the string does not contain the substring, the function should return -1.

// // Logic

// - split up each the string and substring into arrays
// - iterate through string, checking each element against first item of substringArray
// - if there's a match, record the index of the matching element
// - then compare the second element of the substring against the string element at matching index + 1
//   - then keep going until all the substring elements have been compared
//   - if there's a failed match go back to the original iteration, checking first substring element 
//     against matching index + 1 
//   - if there're no failed matches, then return the matching index
// - use two for loops

// Methods


// Code

function indexOf(string, substring) {
  var subLength = (substring.length);
  var stringLength = (string.length);
  for (i = 0; i <= stringLength; i++) {
    if (string.slice(i, subLength + i) === substring) {
      return i;
    }
  }
  return -1;
}

function lastIndexOf(string, substring) {
  var subLength = (substring.length);
  var stringLength = (string.length);
  for (i = stringLength; i >=0; i--) {
    if (string.slice(i - subLength, i) === substring) {
      return i - subLength;
    }
  }
  return -1;
}

// Tests


// console.log(indexOf('Some strings', 's'));                      // 5
// console.log(indexOf('Blue Whale', 'Whale'));                    // 5
// console.log(indexOf('Blue Whale', 'Blute'));                    // -1
// console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1



// function indexOf(firstString, secondString) {
//   stringArray = firstString.split('');
//   subArray = secondString.split('');
//   for (i = 0; i <= (subArray.length - 1); i++) {
//     for (j = 0; j <= (stringArray.length - 1); j++) {
//       if (stringArray[j] === subArray[i]) {
//         result = checkSub(stringArray, subArray, j)
//         if (result) {
//           return result;
//         }
//       }
//     }
//   return -1;
//   }
// }


// function checkSub(stringArray, subArray, indexMatch) {
//   for (i = indexMatch; i <= (stringArray.length - 1); i++) {
//     for (j = 0; j <= (subArray.length - 1); j++) {
//       if (j === subArray.length - 1) {
//         return indexMatch;
//       } 
//       if (stringArray[j] === subArray[i]) {
//         continue;
//       } else {
//         return false;
//       }
//     }
//   }
// }
