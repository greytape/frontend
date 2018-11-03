function myReduce(array, func, initial) {
  var result = initial || array[0];
  array.slice(forEach( function(value) {
    result = func(result, value)
  });
  return result;
}

var smallest = function (result, value) {
  return result <= value ? result : value;
};

var sum = function (result, value) {
  return result + value;
};

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49