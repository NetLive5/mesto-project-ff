const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupEditProfile = document.querySelector(".profile__edit-button");
const popupNewCardOpened = document.querySelector(".profile__add-button");
//const popups = document.querySelectorAll(".popup");
const popupClose = document.querySelectorAll(".popup__close");

// закрытия модального окна
const closeModalWindow = (value) => {
  value.classList.remove("popup_is-opened", "popup_is-animated");
  document.removeEventListener("keydown", keyHandlerEsc);
  value.removeEventListener("click", closePopupByClick);
};

// открытия модального окна
const openModalWindow = (value) => {
  value.classList.add("popup_is-opened", "popup_is-animated"); // Добавляем классы, что бы открыть модальное окно
  document.addEventListener("keydown", keyHandlerEsc); // Добавляем обработчик события для клавиши Esc
  value.addEventListener("click", closePopupByClick); // Добавляем обработчик события для клика по области
};

// модального окна по клику
const closePopupByClick = (evt) => {
  if (
    evt.target === evt.currentTarget || // Проверяем, был ли клик по области модального окна или по кнопке закрытия
    evt.target.classList.contains("popup__close")
  ) {
    closeModalWindow(evt.currentTarget);
  }
};

// модального окна на Esc
const keyHandlerEsc = (event) => {
  if (event.key === "Escape") {
    closeModalWindow(document.querySelector(".popup_is-opened"));
  }
};

export {
  openModalWindow,
  closeModalWindow,
  popupEdit,
  popupNewCard,
  popupEditProfile,
  popupNewCardOpened,
  popupClose,
};

//currentTarget - это свойство объекта события в JavaScript, которое указывает на элемент, на котором был установлен обработчик события.
