function FartoCen() {
  var far = parseFloat(document.getElementById("s5-far").value);
  var celsius = ((far - 32) * 5) / 9;

  document.getElementById("s5-out").textContent =
    far + "°F = " + celsius.toFixed(2) + "°C";
}

function CentoFar() {
  var cen = parseFloat(document.getElementById("s5-cen").value);
  var fahrenheit = (cen * 9) / 5 + 32;

  document.getElementById("s5-out").textContent =
    cen + "°C = " + fahrenheit.toFixed(2) + "°F";
}
