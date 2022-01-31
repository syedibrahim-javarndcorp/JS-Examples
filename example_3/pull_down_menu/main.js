function progList() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

function dd1() {
  window.location.replace("https://google.com");
}
function dd2() {
  window.location.replace("https://bing.com");
}
function dd3() {
  window.location.replace("https://reddit.com");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
