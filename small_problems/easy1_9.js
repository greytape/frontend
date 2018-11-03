function asciiValue(string) {
  if (string === '') {
    return 0;
  }
  return string.split('').map(x=>x.charCodeAt()).reduce((acc,curr_val) => {return acc + curr_val});
}


console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0