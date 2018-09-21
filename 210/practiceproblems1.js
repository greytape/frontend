var a = 'outer';

var setScope = function () {
  a = 'inner';
};

console.log(a); //outer
setScope();  //
console.log(a); //inner