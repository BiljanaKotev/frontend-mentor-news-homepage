const mobileMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector("#nav-links");

mobileMenu.addEventListener("click", dropDown);
function dropDown() {
  //   navLinks.style.display = "block";

  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
}
