let menuBtn = document.querySelector("#menu-btn");
let userMenu = document.querySelector(".user-menu");
let closeBtn = document.querySelector("#close-btn");
let submit = document.querySelector("#submit");

menuBtn.addEventListener("click", () => {
  userMenu.classList.toggle("open-nav");
});

closeBtn.addEventListener("click", () => {
  userMenu.classList.remove("open-nav");
});
submit.addEventListener("click", () => {
  alert("Successfully Login");
  userMenu.classList.remove("open-nav");
});
