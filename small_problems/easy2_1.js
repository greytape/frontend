function crunch(str) {
  result = '';
  str.split('').forEach (function(char) {
    if (result.substr(-1) !== char) {
      result = result + char;
    };
  });
  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""