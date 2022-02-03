function emailValidation(mailID) {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if (mailID.value.match(mailFormat)) 
  {
    alert("valid Email Id");
    document.form1.email.focus();
    return true;
  }
   else 
  {
    alert("Invalid Email Id");
    document.form1.email.focus();
    return false;
  }
}
