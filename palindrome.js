function checkPalindrome(str) {
  var cleaned = str.toLowerCase().replace(/\s+/g, "");
  var reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

function myFunction() {
  var str = document.getElementById("s7-input").value;

  if (checkPalindrome(str)) {
    document.getElementById("s7-out").textContent = '"' + str + '" is a Palindrome.';
  } else {
    document.getElementById("s7-out").textContent = '"' + str + '" is NOT a Palindrome.';
  }
}
