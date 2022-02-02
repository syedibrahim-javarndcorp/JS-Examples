let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);

document.querySelector(".num1").innerHTML = `${num1}`;
document.querySelector(".num2").innerHTML = `${num2}`;

const result =  num1 + num2 ;


document.getElementById("result").addEventListener("submit", function (e) {
  const guessed = document.getElementById("guess").value;

  if (result == guessed) {
    // document.querySelector(
    //   ".result"
    // ).innerHTML = `<h4>Well done the correct answer is ${guessed}</h4>`;
    alert(`Well done the correct answer is ${guessed}`);
  } else {
    // document.querySelector(".result").innerHTML = `<h4>Sorry Wrong answer</h4>`;
    alert('Sorry Wrong answer');
  }
});
