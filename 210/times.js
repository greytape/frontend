function formatTime(date) {
  var hours = String(date.getHours()); 
  var minutes = String(date.getMinutes());
  if (hours.length === 1) {
    hours = '0' + hours;
  } 
  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }
  var time = hours + ':' + minutes;
  return time;
}

today = new Date();
console.log(formatTime(today));
console.log(formatTime(new Date(2013, 2, 1, 1, 10)));