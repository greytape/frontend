function random_number(min, max) {
  min = Math.min(min,max);
  max = Math.max(max,min);
  var difference = max - min;
  return Math.floor((difference * Math.random()) + min);
}

console.log(random_number(1,10));

console.log(random_number(100,1000));