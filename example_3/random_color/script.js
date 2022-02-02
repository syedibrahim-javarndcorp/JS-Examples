function random(){
var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
document.body.style.backgroundColor = randomColor;
}
document.querySelector("body").addEventListener("click", random);