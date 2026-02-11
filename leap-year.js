function leapYear() {
  var year = parseInt(document.getElementById("s2-input").value);

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    document.getElementById("s2-out").textContent = year + " is a Leap Year.";
  } else {
    document.getElementById("s2-out").textContent = year + " is NOT a Leap Year.";
  }
}
