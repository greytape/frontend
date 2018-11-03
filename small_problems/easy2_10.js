function century(year) {
  var century = Math.ceil(year / 100).toString();
  var finalDigit = century.slice(-1);
  var penultimateDigit = century.slice(-2,-1);
  if (finalDigit === '1' && penultimateDigit !== '1') {
    return century + 'st';
  } else if (finalDigit === '2' && penultimateDigit !== '1') {
    return century + 'nd';
  } else if (finalDigit === '3' && penultimateDigit !== '1') {
    return century + 'rd';
  } else {
    return century + 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"