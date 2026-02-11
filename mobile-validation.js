function MobileNoValidation() {
  var mobileNo = document.getElementById("s10-input").value.trim();
  var phPattern = /^(09\d{9}|\+639\d{9})$/;
  var generalPattern = /^\d{10,11}$/;

  if (phPattern.test(mobileNo)) {
    document.getElementById("s10-out").textContent =
      '"' + mobileNo + '" is a Valid Mobile Number.';
  } else if (generalPattern.test(mobileNo)) {
    document.getElementById("s10-out").textContent =
      '"' + mobileNo + '" is a Valid Mobile Number (general format).';
  } else {
    document.getElementById("s10-out").textContent =
      '"' + mobileNo + '" is NOT a Valid Mobile Number.';
  }
}
