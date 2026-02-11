function runScript1() {
  var raw = document.getElementById("s1-input").value.trim();
  var parts = raw.split(",");
  var numbers = [];

  for (var i = 0; i < parts.length; i++) {
    numbers.push(Number(parts[i].trim()));
  }

  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  document.getElementById("s1-out").textContent =
    "Array: [" + numbers.join(", ") + "]\nSum of array elements: " + sum;
}
