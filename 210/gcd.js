// Problem

// Function to create greatest common divisor of two positive integers.
// Eg Greatest common divisor of 10 and 20 is 10
// Eg Greatest common divisor of 42 and 20 is 2

// Logic

// Use Euclid's Algorithm. Divide largest number by smallest number. 
// Then divide smaller number by remainder of previous division. And so on, until remainder === 0.
// Then final divisor is the GCD.

// Methods

// Data

// input: number
// output: number

// Algorithm

// - set argument1 equal to num1
// - set argument2 equal to num2
// - set remainder equal to null   
// - while loop - while remainder !== 0
// - set remainder = num1 % remainder
// - set num1 = num2
// - set num2 = remainder

// Code

function gcd(arg1, arg2) {
  num1 = Math.max(arg1, arg2);
  num2 = Math.min(arg1, arg2);
  remainder = null;
  while (remainder !==0) {
    remainder = num1 % num2;
    num1 = num2;
    num2 = remainder;
  }
  return num1;
} 

console.log(gcd(48, 18));

console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));  