const headerNav = document.querySelector(".header__nav .nav");
const burgerBtn = document.querySelector(".toggle__menu");
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("open");
  headerNav.classList.toggle("open");
});