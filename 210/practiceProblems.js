function sum(arrayArg) {
  var total = 0
  for (var i = 0, length = arrayArg.length; i < length; i += 1) {
    total += arrayArg[i];
  }
  return total
}

function average(array) {
  return sum(array) / array.length;
}

temperatures = [34, 34, 23, 25, 42, 29]

console.log(average(temperatures));




/*function average(arrayArg) {

 / length;
}

array = [1,2,3,1,2,3,1,2,3]

console.log(average(array));*/
