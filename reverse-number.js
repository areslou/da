function rev_num() {
  var num = parseFloat(document.getElementById("s6-input").value);
  var isNegative = num < 0;
  var reversed = parseInt(Math.abs(num).toString().split("").reverse().join(""), 10);
  var result = isNegative ? -reversed : reversed;

  document.getElementById("s6-out").textContent =
    "Original: " + num + "\nReversed: " + result;
}
