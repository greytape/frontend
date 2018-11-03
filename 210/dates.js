var today = new Date();
var tomorrow = today;
tomorrow.setDate(6);


function dateSuffix(date) {
  var datesWithNd = [2,22];
  var datesWithSt = [1,21,31];
  var datesWithRd = [3,22];
  if (datesWithNd.includes(date)) {
    return 'nd';
  } else if (datesWithSt.includes(date)) {
    return 'st';
  } else if (datesWithRd.includes(date)) {
    return 'rd';
  }
  return 'th';
}

function formattedDay(today) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[today.getDay()];
}

function formattedMonth(today) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[today.getMonth()];
}

function formattedDate(today) {
  return "Today's date is " + formattedDay(today) + ' the ' + String(today.getDate()) + dateSuffix(today.getDate) + ' of ' + formattedMonth(today);
}



// console.log(formattedDate(today))
// console.log(formattedDate(tomorrow))

var nextWeek = new Date(today.getTime());

console.log(today === nextWeek);