/*function reverse(string) {
  var result = '';
  for (var idx = (string.length - 1); idx >= 0; idx -= 1) {
    result = result + string[idx];
  }
  return result;
}*/

function reverse(string) {
  return string.split('').reverse().join('');
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"