console.log('What is the bill?');
console.log('What is the tip percentage?');
var bill = 200
var tipPercentage = 15 / 100;
var tip = (bill * tipPercentage);
var total = (bill + tip);

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);