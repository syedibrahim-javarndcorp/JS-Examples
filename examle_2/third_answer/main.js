let number = prompt(
  "Enter the number for which the multiplication table is required "
);
let result = " ";

for (let i = 0; i <= 10; i++) {
 // result = result + "<p>" + number + "x" + i + "=" + number * i + "</p>";
 result = result + `<p> ${i} x ${number} = ${i*number}</p>`;
  document.querySelector(".multi").innerHTML = result;
}
