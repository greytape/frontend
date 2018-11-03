function logInBox(text) {
  var textLength = text.length;
  var dashes = '-'.repeat(textLength);
  var spaces = ' '.repeat(textLength);
  console.log(`+-${dashes}-+`);
  console.log(`| ${spaces} |`);
  console.log(`| ${text} |`);
  console.log(`| ${spaces} |`);
  console.log(`+-${dashes}-+`);
}

logInBox('');