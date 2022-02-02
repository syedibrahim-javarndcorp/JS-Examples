function validate(){

    var check = document.getElementById('string-check').value;

    if(check == "" ){
        alert("string is empty");
        document.check-form.string.focus();
        return false;
    }
  
}