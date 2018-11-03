function myOwnEvery(array, func) {
  result = true;
  array.forEach( function(value) {
    if(!func(value)) {
      result = false;
    }
  });
  return result;
}

var isAString = function (value) {
  return typeof value === 'string';
};

console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true