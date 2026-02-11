function set_background() {
  var color = document.getElementById("s9-input").value;
  document.getElementById("s9-para").style.backgroundColor = color;
  document.getElementById("s9-out").textContent =
    'Background color of paragraph set to: "' + color + '"';
}
