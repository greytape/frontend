function circumference (radius) {
  function double(number) {
    return 2 * number;
  }

  return 3.14 * double(radius);
}

console.log(circumference(4))