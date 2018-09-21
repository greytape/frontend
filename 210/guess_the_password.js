function password_lock() {
  var password = 'psst1'
  for (i = 0; i < 3; i++) {
    guess = prompt('What is the password?');
    if (guess === password) {
      console.log('You have succesfully logged in.')
      return
    }
  }
  console.log('you have been denied access');
}

password_lock();

