function runScript3() {
  var output = "";

  for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      output += i + " is Even\n";
    } else {
      output += i + " is Odd\n";
    }
  }

  document.getElementById("s3-out").textContent = output.trim();
}
