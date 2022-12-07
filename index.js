function dropDown() {
  const closeMenu = document.querySelector(".close-menu");
  const navLinks = document.querySelector("#nav-links");
  const ulFlex = document.querySelector(".ul-flex");
  mobileMenu.classList.toggle("active");
  closeMenu.classList.toggle("active");
  navLinks.classList.toggle("active");
  ulFlex.classList.toggle("active");
}

const mobileMenu = document.querySelector(".hamburger-menu");
mobileMenu.addEventListener("click", dropDown);
