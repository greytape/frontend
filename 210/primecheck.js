function isPrime(numArg) {
  for (i = 2; i < numArg; i++) {
    if (numArg % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(17));
console.log(isPrime(23));