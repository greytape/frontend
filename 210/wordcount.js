function wordcount(string) {
  object = {}
  array = string.split(' ');
  for (var i in array) {
    if (object[array[i]]) {
      object[array[i]] += 1;
    } else {
      object[array[i]] = 1;
    }
  } 
  return object;
}

console.log(wordcount('hat cat bat slat bat bat bat'));