// закрытия модального окна
const closeModalWindow = (value) => {
  value.classList.remove("popup_is-opened", "popup_is-animated"); // Убираем классы, отвечающие за открытость и анимацию модального окна
  document.removeEventListener("keydown", keyHandlerEsc); // Удаляем обработчик события для клавиши Esc
  value.removeEventListener("click", closePopupByClick); // Удаляем обработчик события для клика по области модального окна или кнопке закрытия
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
    evt.target === evt.currentTarget ||
    evt.target.classList.contains("popup__close") // Проверяем, был ли клик по области модального окна или по кнопке закрытия
  ) {
    closeModalWindow(evt.currentTarget); // Закрываем модальное окно
  }
};

// модального окна на Esc
const keyHandlerEsc = (event) => {
  // Проверяем, была ли нажата клавиша Esc
  if (event.key === "Escape") {
    closeModalWindow(document.querySelector(".popup_is-opened"));
  }
};

export { openModalWindow, closeModalWindow };

//currentTarget - это свойство объекта события в JavaScript, которое указывает на элемент, на котором был установлен обработчик события.
//evt.currentTarget — элемент, где сработал обработчик;
//evt.target — элемент, где возникло событие.
