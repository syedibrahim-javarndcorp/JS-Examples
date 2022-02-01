var number = prompt("Enter a number to find the day of the month");
var d = new Date();
var month = d.getMonth();
var year = d.getFullYear();

// console.log(month, year)

var dayOfMothn = (number,month,year) => {
    return new Date(number,month  ,year).toLocaleString('en-US',{weekday:"long"});

}

document.querySelector(".date").innerHTML=dayOfMothn(number -1 ,month  ,year);