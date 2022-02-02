let num1 = parseFloat(prompt("Enter the First Number"));
let opertaor = prompt("Enter the operator + , - , * , /");
let num2 = parseFloat(prompt("Enter the Second Number"));

let res;
if (opertaor == "+") {
  res = num1 + num2;
} else if (opertaor == "-") {
  res =  num1 - num2;
} else if (opertaor == "*") {
  res =  num1 * num2;
} else if (opertaor == "/") {
  res =  num1 / num2;
}

document.querySelector('.res').innerHTML = `<p> Result is ${res}</p>`