function greetings(array, status) {
  var name = array.join(' ');
  return `Hello, ${name}! Nice to have a ${status.title} ${status.occupation} around`
}

result = greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })

console.log(result);
