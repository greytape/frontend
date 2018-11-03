function isValidEmail(email) {
  if (email.indexOf('@') === -1) { return false };
  var localPart = email.split('@')[0];
  var domainPart = email.split('@')[1];
  return (localPartValid(localPart) && domainPartValid(domainPart))
}

function localPartValid(localPart) {
  return /^[A-Za-z0-9]*$/.test(localPart);
}

function domainPartValid(domainPart) {
  var domainArray = domainPart.split('.')
  var splitByDot = (domainArray.length >= 2);
  var onlySingleDots = domainArray.every(part => part !== '');
  var onlyContainsLetters = domainArray.every(part => /^[A-Za-z]*$/.test(part));
  return (splitByDot && onlySingleDots && onlyContainsLetters);
}


console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false