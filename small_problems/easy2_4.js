function findFibonacciIndexByLength(numLength) {
  fibonacciArray = [0,1]
  for (var idx = 2; ; idx += 1) {
    fibonacciArray[idx] = fibonacciArray[idx - 1] + fibonacciArray[idx - 2];
    if (fibonacciArray[idx].toString().length === numLength) {
      return idx;
    }
  }
}


console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74