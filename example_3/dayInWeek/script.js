var number = prompt("Enter a number to find the day of the month");
var d = new Date();
var month = d.getMonth();
var year = d.getFullYear();

var dayOfMothn = (number, month, year) => {

  return new Date(number - 1 , month, year).toLocaleString("en-US", {
    weekday: "short",
  });
};

document.querySelector(".date").innerHTML = dayOfMothn(number, month, year);
