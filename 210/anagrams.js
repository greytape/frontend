
function anagram(word, list) {
  return list.filter(thisWord => {return sortText(thisWord) === sortText(word)});
}

function sortText (word) {
  return word.toLowerCase().split('').sort().join('');
}



console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]