function leapYear() {
  var year = parseInt(document.getElementById("s2-input").value);


if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  alert(year + " is a Leap Year."); 
} else {
  alert(year + " is NOT a Leap Year."); 
}
}
