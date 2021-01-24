
function validateEmail(str) {
    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    // The email validator, https://www.w3resource.com/javascript/form/email-validation.php
    
    return emailPattern.test(str);
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