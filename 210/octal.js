function octalToDecimal(numberString) {
  var numberArray = numberString.split('').map(char => parseInt(char,10)).reverse();
  numberArray = numberArray.map(timesEightToPowerN);
  return numberArray.reduce(sum_all);
}

function sum_all(accumulator, curr_val) {
  return accumulator + curr_val;
}

function timesEightToPowerN(char, idx) {
  return char * (8 ** idx);
}


console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9