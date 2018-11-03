function isBalanced(text) {
  var counter = 0;
  for (var idx = 0; idx < text.length; idx += 1) {
    if (text[idx] === '(') {
      counter += 1;
    } else if (text[idx] === ')') {
      counter += -1;
    }
    if (counter < 0) {return false}
  }
  return (counter === 0);
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false