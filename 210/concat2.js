// Problem

// Logic

// Methods

// Code

function concat() {
  var returnArray = []
  for (argIdx = 0; argIdx < arguments.length; argIdx++) {
    var currentArg = arguments[argIdx];
    arrayLength = currentArg.length;
    if (Array.isArray(currentArg)) {
      for (arrIdx = 0; arrIdx < currentArg.length; arrIdx++) {
        returnArray.push(currentArg[arrIdx]);
      }
    } else {
        returnArray.push(currentArg);
    }
  }
  return returnArray;
}

// Tests

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]