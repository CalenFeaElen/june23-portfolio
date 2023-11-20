let button = document.querySelector(".dropbtn");
let menuContents = document.querySelector(".dropup-content");
let links = document.querySelector(".mobile-link");

button.addEventListener("click", openCloseMenu);

function openCloseMenu() {
  if (menuContents.classList.contains("show")) {
    menuContents.classList.remove("show");
  } else {
    menuContents.classList.add("show");
  }
}
