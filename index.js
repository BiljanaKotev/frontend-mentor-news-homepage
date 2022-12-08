function dropDown() {
  const ulMenu = document.querySelector(".ul-menu");

  ulMenu.classList.toggle("active");
}

const hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.addEventListener("click", dropDown);
