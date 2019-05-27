var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var pageHeader = document.querySelector(".page-header");

navMain.classList.remove("main-nav--nojs");

function setup_for_width(mql) {
  if (mql.matches) {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
    pageHeader.classList.add("page-header--closed");

    navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
      pageHeader.classList.remove("page-header--closed");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
      pageHeader.classList.add("page-header--closed");
    }
    });
  } else {
    navMain.classList.add("main-nav--opened");
    navMain.classList.remove("main-nav--closed");
    pageHeader.classList.remove("page-header--closed");
  }
}

var mql = window.matchMedia("(min-width: 320px) and (max-width: 1199px)");
mql.addListener(setup_for_width);
setup_for_width(mql);
