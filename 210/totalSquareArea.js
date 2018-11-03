function totalArea(array1) {
  areasArray = array1.map(x => x[0] * x[1]);
  return areasArray.reduce((acc, curr_val) => acc + curr_val);
}

function totalSquareArea(array) {
  squaresArray = array.filter(area => area[0] === area[1])
  areasArray = squaresArray.map(x => x[0] * x[1]);
  return areasArray.reduce((acc, curr_val) => acc + curr_val);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141
console.log(totalSquareArea(rectangles));    // 121