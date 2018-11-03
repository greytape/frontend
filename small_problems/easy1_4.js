// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

function calculamos(sum_or_product, integer) {
  var sum = (sum_or_product === 's');
  var total = 0;
  array = [...Array(integer).keys()].map(x=> x+1);
  if (sum) {
    total = array.reduce((acc, curr_val) => {return acc + curr_val});
  } else {
    total = array.reduce((acc,curr_val) => {return acc * curr_val});
  };
  return total;
}

console.log(calculamos('p', 6))
