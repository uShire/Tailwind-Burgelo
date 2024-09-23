const menuNav = document.querySelectorAll(".menu__page__nav__link");
const menuContent = document.querySelectorAll(".menu__page__content");
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
