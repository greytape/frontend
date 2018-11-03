function repeatedCharacters(string) {
  string = string.toLowerCase();
  array = string.split('');
  var collect_object = {};
  var return_object = {};
  for (var i = 0; i < array.length; i++) {
    if (collect_object[array[i]]) {
      collect_object[array[i]] += 1;
    } else {
      collect_object[array[i]] = 1;
    }
  }
  for (var key in collect_object) {
    if (collect_object.hasOwnProperty(key)) {
      if (collect_object[key] >= 2) {
        return_object[key] = collect_object[key];
      }
    }
  }
  return return_object;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }