/* находим тег с классом header__navigation  и сохраняем его в переменную*/
var nav = document.querySelector(".header__navigation");

/* находим кнопку с классом header__button-menu и сохраняем его в переменную  */
var navToggle = document.querySelector(".header__button-menu");

/* Отслеживаем событие клика по элементу  */
navToggle.addEventListener("click", function() {

/* меняем классы - (если есть - удаляем и ставим другой )  */
  nav.classList.toggle("header__navigation--active");
  nav.classList.toggle("header__navigation--inactive");
  nav.classList.add("header__navigation--white");
  if (pageYOffset === 0 && nav.classList.contains("page-nav--inactive")) {
    nav.classList.remove("header__navigation--white");
  }
});

window.addEventListener("scroll", function() {
  nav.classList.add("header__navigation--white");
  nav.classList.add("header__navigation--scrolled");
  nav.classList.remove(".header__navigation--inner");
  if (pageYOffset === 0 && nav.classList.contains("header__navigation--inactive")) {
    nav.classList.remove("header__navigation--white");
    nav.classList.remove("header__navigation--scrolled");
    nav.classList.add("header__navigation--inner");
  }
});
