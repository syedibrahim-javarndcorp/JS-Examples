function validation() {
  var x = document.forms["saveForm"]["fname"].value;
  var y = document.forms["saveForm"]["lname"].value;
  var z = document.forms["saveForm"]["phone"].value;
  if (x == "") {
    alert("First Name must be filled out");
    document.saveForm.fname.focus();
    return false;
  } else if (y == "") {
    alert("Last Name must be filled out");
    document.saveForm.lname.focus();
    return false;
  } else if (z == "") {
    alert("Phone number must be filled out");
    document.saveForm.phone.focus();
    return false;
  } else if (x != "" && y != "" && z != "") {
    alert("Thank you");
  }
}
