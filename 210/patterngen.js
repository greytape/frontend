// // Problem

// - function that takes number of rows as argument
// - creates square of rows and asterisks as output
// - first row contains 1 and (n-1) asterisks
// - second row contains 1, 2 and (n-2) asterisks etc

// // Logic

// - set rows equal to numArg
// - set row = 1
// - set currentRow = []
// - for loop
//     if i <= row
//       add i to currentRow
//     else 
//       add * to currentRow
//      add 1 to rows
//      log currentRow


// // Methods

// #join();

// // Code

function generatePattern(rows) {
  for (i = 1; i <= rows; i++) {
    rowArray = [];
    for (j = 1; j <= rows; j++) {
      if (j <= i) {
        rowArray.push(j);
      } else {
        rowArray.push('*');
      } 
    }
    console.log(rowArray.join(''));
  }
}


// Tests

generatePattern(11);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567
