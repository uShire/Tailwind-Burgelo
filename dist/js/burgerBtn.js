const homeNav = document.querySelector(".header__nav .nav li#home");
homeNav.addEventListener("click", () => {
  homeNav.classList.toggle("open");
  homeNav.nextElementSibling.classList.toggle("open");
});

const headerNav = document.querySelector(".header__nav .nav");
const burgerBtn = document.querySelector(".toggle__menu");
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("open");
  headerNav.classList.toggle("open");
});
