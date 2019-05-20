var priceToggle1 = document.querySelector(".price__toggle:nth-child(1)");
var priceToggle2 = document.querySelector(".price__toggle:nth-child(2)");
var priceToggle3 = document.querySelector(".price__toggle:nth-child(3)");

var priceFree1 = document.querySelectorAll(".price__cell-free:nth-child(2)");
var priceFree2 = document.querySelectorAll(".price__cell-free:nth-child(3)");
var priceFree3 = document.querySelectorAll(".price__cell-free:nth-child(4)");

var priceTitle1 = document.querySelectorAll(".price__cell-title:nth-child(2)");
var priceTitle2 = document.querySelectorAll(".price__cell-title:nth-child(3)");
var priceTitle3 = document.querySelectorAll(".price__cell-title:nth-child(4)");

var mql = window.matchMedia('(max-width: 659px)');

function screenTest(e) {
  if (e.matches) {




// По умолчанию
priceToggle1.classList.remove("slider__toggle--active");
priceToggle2.classList.add("slider__toggle--active");
priceToggle3.classList.remove("slider__toggle--active");
for (var i = 0; i < priceFree1.length; i++) {
  priceFree1[i].classList.add("hidden");
}
for (var i = 0; i < priceFree2.length; i++) {
  priceFree2[i].classList.remove("hidden");
}
for (var i = 0; i < priceFree3.length; i++) {
  priceFree3[i].classList.add("hidden");
}
for (var i = 0; i < priceTitle1.length; i++) {
  priceTitle1[i].classList.add("hidden");
}
for (var i = 0; i < priceTitle2.length; i++) {
  priceTitle2[i].classList.remove("hidden");
}
for (var i = 0; i < priceTitle3.length; i++) {
  priceTitle3[i].classList.add("hidden");
}

//

priceToggle1.addEventListener("click", function (evt) {
  priceToggle1.classList.add("slider__toggle--active");
  priceToggle2.classList.remove("slider__toggle--active");
  priceToggle3.classList.remove("slider__toggle--active");
  for (var i = 0; i < priceFree1.length; i++) {
    priceFree1[i].classList.remove("hidden");
  }
  for (var i = 0; i < priceFree2.length; i++) {
    priceFree2[i].classList.add("hidden");
  }
  for (var i = 0; i < priceFree3.length; i++) {
    priceFree3[i].classList.add("hidden");
  }
  for (var i = 0; i < priceTitle1.length; i++) {
    priceTitle1[i].classList.remove("hidden");
  }
  for (var i = 0; i < priceTitle2.length; i++) {
    priceTitle2[i].classList.add("hidden");
  }
  for (var i = 0; i < priceTitle3.length; i++) {
    priceTitle3[i].classList.add("hidden");
  }
});
priceToggle2.addEventListener("click", function (evt) {
  priceToggle1.classList.remove("slider__toggle--active");
  priceToggle2.classList.add("slider__toggle--active");
  priceToggle3.classList.remove("slider__toggle--active");
  for (var i = 0; i < priceFree1.length; i++) {
    priceFree1[i].classList.add("hidden");
  }
  for (var i = 0; i < priceFree2.length; i++) {
    priceFree2[i].classList.remove("hidden");
  }
  for (var i = 0; i < priceFree3.length; i++) {
    priceFree3[i].classList.add("hidden");
  }
  for (var i = 0; i < priceTitle1.length; i++) {
    priceTitle1[i].classList.add("hidden");
  }
  for (var i = 0; i < priceTitle2.length; i++) {
    priceTitle2[i].classList.remove("hidden");
  }
  for (var i = 0; i < priceTitle3.length; i++) {
    priceTitle3[i].classList.add("hidden");
  }
});
priceToggle3.addEventListener("click", function (evt) {
  priceToggle1.classList.remove("slider__toggle--active");
  priceToggle2.classList.remove("slider__toggle--active");
  priceToggle3.classList.add("slider__toggle--active");
  for (var i = 0; i < priceFree1.length; i++) {
    priceFree1[i].classList.add("hidden");
  }
  for (var i = 0; i < priceFree2.length; i++) {
    priceFree2[i].classList.add("hidden");
  }
  for (var i = 0; i < priceFree3.length; i++) {
    priceFree3[i].classList.remove("hidden");
  }
  for (var i = 0; i < priceTitle1.length; i++) {
    priceTitle1[i].classList.add("hidden");
  }
  for (var i = 0; i < priceTitle2.length; i++) {
    priceTitle2[i].classList.add("hidden");
  }
  for (var i = 0; i < priceTitle3.length; i++) {
    priceTitle3[i].classList.remove("hidden");
  }
});







  }

  else {
    priceToggle1.classList.remove("slider__toggle--active");
    priceToggle2.classList.remove("slider__toggle--active");
    priceToggle3.classList.remove("slider__toggle--active");
    for (var i = 0; i < priceFree1.length; i++) {
      priceFree1[i].classList.remove("hidden");
    }
    for (var i = 0; i < priceFree2.length; i++) {
      priceFree2[i].classList.remove("hidden");
    }
    for (var i = 0; i < priceFree3.length; i++) {
      priceFree3[i].classList.remove("hidden");
    }
    for (var i = 0; i < priceTitle1.length; i++) {
      priceTitle1[i].classList.remove("hidden");
    }
    for (var i = 0; i < priceTitle2.length; i++) {
      priceTitle2[i].classList.remove("hidden");
    }
    for (var i = 0; i < priceTitle3.length; i++) {
      priceTitle3[i].classList.remove("hidden");
    }
  }
}

mql.addListener(screenTest);


