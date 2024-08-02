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

const menuNav = document.querySelectorAll(".menu__nav__link");
const menuContent = document.querySelectorAll(".menu__content");
menuNav.forEach((menu) => {
  menu.addEventListener("click", () => {
    removeActiveNav();
    menu.classList.add("active");
    const activeContent = document.querySelector(`#${menu.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveNav() {
  menuNav.forEach((menu) => {
    menu.classList.remove("active");
  });
}

function removeActiveContent() {
  menuContent.forEach((menu) => {
    menu.classList.remove("active");
  });
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
