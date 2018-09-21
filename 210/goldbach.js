// // Problem

// - Given a number, supply every pair of primes that sum to the number
// - If the number given is odd or less than 4, function should return null
// - log pairs with smallest number first

// // Logic

// - generate a list of all prime numbers smaller than n
// - for each prime number, 
//   - iterate through the list summing the pair to see if it equals n
//   - if it does, log the pair, otherwise, keep going
// - stop when you get to n/2 (as you will start getting repeat pairings)

// // Algorithm



// // Methods



// Code

function isPrime(numArg) {
  for (i = 2; i < numArg; i++) {
    if (numArg % i === 0) {
      return false;
    }
  }
  return true;
}


function checkGoldbach(numArg) {
  if (numArg < 4 || numArg % 2 !== 0) {
    console.log(null);
    return
  }

  var primeList = [];
  for (i = 2; i < numArg; i++) {
    if (isPrime(i)) {
      primeList.push(i);
    }
  }

  var arrayLength = primeList.length;
  for (var i = 0; i < arrayLength; i++) {
    for (var j = 0; j < arrayLength; j++) {
      if (primeList[i] > numArg / 2) {
        continue;
      } 
      if (primeList[i] + primeList[j] === numArg) {
        console.log(primeList[i], primeList[j]);
      }
    }
  }
}

// Tests

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53