var finPattern = "^((90[0-9]{3})?0|\\+358\\s?)(?!(100|20(0|2(0|[2-3])|9[8-9])|300|600|700|708|75(00[0-3]|(1|2)\\d{2}|30[0-2]|32[0-2]|75[0-2]|98[0-2])))(4|50|10[1-9]|20(1|2(1|[4-9])|[3-9])|29|30[1-9]|71|73|75(00[3-9]|30[3-9]|32[3-9]|53[3-9]|83[3-9])|2|3|5|6|8|9|1[3-9])\\s?(\\d\\s?){4,19}\\d$"


document.theform.myname.onfocus = function () {
  document.getElementById('mynamehint').innerHTML = "Last name first, first name last";
}

document.theform.myname.onblur = function () {
  document.getElementById('mynamehint').innerHTML = " ";
}

document.theform.email.onfocus = function () {
  document.getElementById('emailhint').innerHTML = "Email should look something like this: example@mail.com";
}

document.theform.email.onblur = function () {
  document.getElementById('emailhint').innerHTML = " ";
}

document.theform.url.onblur = function() {
  if (document.theform.url.value ==="") {   
    document.getElementById('urlhint').innerHTML = "Url is required";
  } else {
    document.getElementById('urlhint').innerHTML = " ";
  }
}

document.theform.url.onchange = function() {
  theurl = document.theform.url.value;
  if (theurl.indexOf('http://')) {
    document.theform.url.value = "http://"+document.theform.url.value;
  }
}

document.theform.phone.onchange = function() {
  var myPattern = finPattern;
  var myPlaceholder = this.placeholder;
  var isValid = this.value.search(myPattern) >= 0;

  if (!(isValid)) {
    // if its not valid
    document.getElementById('phonehint').innerHTML = "Your input didn't match with given pattern. " + myPlaceholder;
  } else {
    // if it is!
    document.getElementById('phonehint').innerHTML = "";
  }
}