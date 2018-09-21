// // Problem

// - create function that return substring of string.
// - fucntion has three parameters, the string, a start index and an end index
// - function should return a substring, start at the start index (inclusive) and ending at the 
//   end index (not inclusive)
// - if start is greater than end, swap the results
// - if start equals end, return empty string
// 

// // Logic

// - if start === undefined, start = 0
// - if end  === undefined, end = 0
// - set start as the smaller of start and end 
// - set end as the larger of start and end 
// - initialise variable as return_string
// - iterate through the string.
//   - if current character is greater than or equal to start AND current character is less than end
//     - add character to return_string
// - return return_string

// // Methods

// Math#max();

// // Code

function substring(string, start, end) {
  if (start === end) {
    return '';
  }
  if (end === undefined) {
    end = string.length;
  }
  if (start < 0 || isNaN(start)) {
    start = 0;
  }
  if (end < 0 || isNaN(end)) {
    end = 0;
  }
  start_idx = Math.min(start, end);
  end_idx = Math.max(start, end);
  return_string = '';
  for (i = 0; i < string.length; i++) {
    if (i >= start_idx && i < end_idx) {
      return_string += string[i];
    }
  }
  return return_string;
}

// Tests

var string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
