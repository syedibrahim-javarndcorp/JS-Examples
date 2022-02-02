var image = document.querySelector(".images");

image.addEventListener("mouseover",mouseOvr);

image.addEventListener("mouseout", function(){
    image.src = "./images/mouseout.jpeg"
})

function mouseOvr(){
    image.src = "./images/mouseover.jpeg"
}