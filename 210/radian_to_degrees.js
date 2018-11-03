function radianToDegrees(radian) {
  var degrees_in_a_radian = 180 / Math.PI;
  return radian * degrees_in_a_radian;
}

console.log(radianToDegrees(2*Math.PI))