var story__form = document.querySelector(".story__form");
var send_form = document.querySelector(".story__send-button");
var popup_error = document.querySelector(".modal--error");
var popup_ok = document.querySelector(".modal--ok");
var button_error_close = document.querySelector(".modal--error .modal__button");
var button_ok_close = document.querySelector(".modal--ok .modal__button");
var user_name = document.querySelector("[name=user-name]");
var user_surname = document.querySelector("[name=user-surname]");
var contact_email = document.querySelector("[name=contact-email]");

button_error_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_error.classList.add("modal--close");
  popup_error.classList.remove("modal--show");
});

button_ok_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_ok.classList.add("modal--close");
  popup_ok.classList.remove("modal--show");
});

send_form.addEventListener("click", function (evt) {
  if (!user_name.value || !user_surname.value || !contact_email.value) {
    evt.preventDefault();
    popup_error.classList.remove("modal--close");
    popup_error.classList.add("modal--show");
  } else {
    popup_ok.classList.remove("modal--close");
    popup_ok.classList.add("modal--show");
  }
});
