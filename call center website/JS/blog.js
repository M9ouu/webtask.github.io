let topHeader = document.querySelector(".header-scroll");
let hover = document.querySelector("#hover");
console.log(hover);
window.addEventListener("scroll", () => {
  let scrolling = document.documentElement.scrollTop;
  console.log();
  if (scrolling >= 100) {
    topHeader.classList.add("scroll");
    hover.style.color = "black";
    hover1.style.color = "black";
    hover2.style.color = "black";
    hover3.style.color = "black";
    hover4.style.color = "black";
    hover5.style.color = "black";
    hover6.style.color = "black";
    hover7.style.color = "black";
  } else {
    topHeader.classList.remove("scroll");
    hover.style.color = "white";
    hover1.style.color = "white";
    hover2.style.color = "white";
    hover3.style.color = "white";
    hover4.style.color = "white";
    hover5.style.color = "white";
    hover6.style.color = "white";
    hover7.style.color = "white";
  }
});
function switchMode() {
  let moon = document.getElementById("moon");
  if (moon.className == "moon") {
    moon.className = "sun";
    document.body.style.backgroundColor = "#161e4a";
    document.body.style.color = "#fff";
  } else {
    moon.className = "moon";
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
}
