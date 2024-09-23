const menuPageContentHTML = document.querySelector(".menu__page__content ");
const cartBtn = document.querySelector(".header__nav ul.action li.cart ");
const menuCart = document.querySelector(".menu__cart ");
const btnClose = document.querySelector(".btn-close ");
const body = document.querySelector("body");
let cart = [];
let products = [];

cartBtn.addEventListener("click", () => {
  menuCart.classList.toggle("open");
  btnClose.classList.remove("open");
  body.classList.toggle("scroll");
});

const addDataToHTML = () => {
  // remove datas default from HTML

  // add new datas
  if (products.length > 0) {
    // if has data
    products.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.dataset.id = product.id;
      newProduct.classList.add("menu__page__content__item");
      newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <div class="menu__page__content__text">
                  <h4>${product.name}</h4>
                  <h3>${product.price}</h3>
                  <p>${product.desc}</p>
                </div>
                <a href class="addCart btn bg-primary"><i class="fa-solid fa-cart-shopping"></i
                      ><span>ADD TO CART</span></a>`;
      menuPageContentHTML.appendChild(newProduct);
    });
  }
};

const initApp = () => {
  // get data product
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      products = data;
      addDataToHTML();

      // get data cart from memory
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        addCartToHTML();
      }
    });
};
initApp();
