var longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced.'

function countWords(sentence) {
  return sentence.split(' ').length;
}

function longestSentence(text) {
  var sentenceArray = text.split(/!|\.|\?/);

  longestSentence = sentenceArray.reduce(function(longestSentence, currentSentence) {
    return countWords(currentSentence) > countWords(longestSentence) ? currentSentence : longestSentence; 
  });

  console.log(`The longest sentence has ${countWords(longestSentence)} words`)
  console.log(longestSentence)
}

longestSentence(longText);