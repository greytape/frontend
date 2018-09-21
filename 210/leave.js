function myFunction() {
  var txt;
  if (confirm('Leaving the EU will involve a complete reorganisation of UK laws and regulation which will occupy the political establishment for a least a decade. At the same time it is likley to involve a loss of economic output equivalent to more than 5% of GDP. Are you sure?')) {
    txt = "You have decided to leave the EU."
  } else {
    txt = "You have decided not to leave the EU."
  }
  document.getElementById("demo").innerHTML = txt;
}
