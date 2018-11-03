function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    var shortString = string2;
    var longString = string1;
  } else {
    var shortString = string1;
    var longString = string2;
  }
  return shortString + longString + shortString;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"