function validateEmail(str) {
    true
}

function onFocus() {
    if (document.activeElement.tagName != "INPUT") {
      var email = document.getElementById("email").value;
      if (!validateEmail(email)) {
        document.getElementById("email").style.outline = "none";
        document.getElementById("email").style.border = "1px solid red";
        document.getElementById("error-text").innerHTML =
          "A valid email is required";
      } else {
        document.getElementById("email").style.outline = "none";
        document.getElementById("email").style.border = "1px solid black";
        document.getElementById("error-text").innerHTML = "";
      }
    }
  }