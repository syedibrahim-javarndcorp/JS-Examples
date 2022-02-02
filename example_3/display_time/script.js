var today = new Date();
var hours = today.getHours();
var time =  today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

var greetings = "";
if (hours > 0 && hours < 12 ){
     greetings = "Good Morning";
}
else if(hours === 12){
     greetings = "Good Noon";
}
else if (hours > 12 && hours < 16){
     greetings = "Good Evening";
}
else{
     greetings = 'Good Night';
}

// console.log(`${greetings} Current time is : ${time}`);

document.querySelector(".time").innerHTML = `${greetings} Current time is : ${time}`;