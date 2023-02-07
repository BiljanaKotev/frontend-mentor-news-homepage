const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".mobile-menu-close");
const ulMenu = document.querySelector(".ul-menu");

hamburgerMenu.addEventListener("click", dropDown);
closeMenu.addEventListener("click", dropDown);

function dropDown() {
  closeMenu.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
  if (ulMenu.style.display === "block") {
    ulMenu.style.display = "none";
  } else {
    ulMenu.style.display = "block";
  }
}

