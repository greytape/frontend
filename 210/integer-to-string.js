// Problem

// - create function that takes integer as argument and returns equivalent string

// Logic

// - create empty array (moduloArray)
// - create array of STRINGINTEGERS
// - create returnString string
// - set multiple as 1
// - create for loop 
//   - integer argument modulo multiple
//   - if result = integer argument
//     - break
//   - else
//     - push result to moduloArray
//   - multiply multiple by 10
// - iterate through moduloArray
//   - result = moduloArray[idx] - moduloArray[idx - 1] / 10^(idx-1)
//   - use result to produce STRINGINTEGERS
//   - add STRINGINTEGER value to returnString

// Methods

// #%

// Code

function integerToString(integer) {
  var moduloArray = [];
  var STRINGINTEGERS = ['0','1','2','3','4','5','6','7','8','9'];
  var returnString = '';
  do {
    var remainder = integer % 10;
    integer = Math.floor(integer / 10);
    returnString = STRINGINTEGERS[remainder] + returnString;
  } while (integer > 0);
  return returnString;
}

function signedIntegerToString(integer) {
  var isPositive = (integer < 0) ? false : true;
  if (!isPositive) {
    integer *= -1;
  }
  var string = integerToString(integer);
  if (string === '0') {
    return string;
  }
  string = (isPositive) ? '+' + string : '-' + string;
  return string;
}


// Tests

// console.log(integerToString(4321));      // "4321"
// console.log(integerToString(0));         // "0"
// console.log(integerToString(5000));      // "5000"

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"