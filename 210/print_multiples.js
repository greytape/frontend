function logMultiples(numarg) {
  for (i = 100; i >= 0; i--) {
    if (i % 2 !== 0 && i % numarg === 0) {
      console.log(i);
    }
  }
}

logMultiples(21)
