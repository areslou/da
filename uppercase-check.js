function upper_case() {
  var str = document.getElementById("s8-input").value;
  var first = str[0];

  if (first === first.toUpperCase() && first !== first.toLowerCase()) {
    document.getElementById("s8-out").textContent =
      '"' + str + '" - First character "' + first + '" is Uppercase.';
  } else {
    document.getElementById("s8-out").textContent =
      '"' + str + '" - First character "' + first + '" is NOT Uppercase.';
  }
}
