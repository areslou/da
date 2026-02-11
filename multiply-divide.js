function multiplyBy() {
  var num1 = parseFloat(document.getElementById("s4-n1").value);
  var num2 = parseFloat(document.getElementById("s4-n2").value);

  document.getElementById("s4-out").textContent =
    num1 + " x " + num2 + " = " + (num1 * num2);
}

function divideBy() {
  var num1 = parseFloat(document.getElementById("s4-n1").value);
  var num2 = parseFloat(document.getElementById("s4-n2").value);

  if (num2 === 0) {
    document.getElementById("s4-out").textContent = "Error: Cannot divide by zero.";
  } else {
    document.getElementById("s4-out").textContent =
      num1 + " / " + num2 + " = " + (num1 / num2);
  }
}
