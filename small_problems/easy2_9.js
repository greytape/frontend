function cleanUp(text) {
  return text.replace(/[^a-z]/ig, ' ').replace(/\s\s+/g, ' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "