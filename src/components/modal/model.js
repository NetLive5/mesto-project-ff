const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupEditProfile = document.querySelector(".profile__edit-button");
const popupNewCardOpened = document.querySelector(".profile__add-button");
const popup = document.querySelectorAll(".popup");
const popupClose = document.querySelectorAll(".popup__close");

const modalWindow = (value) => {
  value.classList.add("popup_is-animated"); //Обернул в асинк , для до го что бы класс сначала добавился, а потом открыть модальное окно
  setTimeout(() => {
    value.classList.add("popup_is-opened"); // Функция добавления и удаления модального окна при клике
    const closeHandler = () => {
      value.classList.remove("popup_is-opened"); // Сохраняем ссылку на функцию-обработчик события
      document.removeEventListener("keydown", KeyHandlerEsc); // Удаляем обработчик после закрытия модального окна
    };

    for (let closed of popupClose) {
      closed.addEventListener("click", closeHandler); // Добавляем обработчик закрытия для каждой кнопки закрытия
    }
    // Добавляем обработчик закрытия для клика по области
    value.addEventListener("click", (evt) => {
      //Проверяем был клик по области
      if (evt.target === value) {
        closeHandler();
      }
    });

    setTimeout(() => {
      value.classList.remove("popup_is-animated");
    }, 1000); // Задержка удаления класса , что бы анимация успела сыграть

    document.addEventListener("keydown", KeyHandlerEsc); // Добавляем обработчик события Esc при открытии окна
  });
};

// Обработчик события Esc
const KeyHandlerEsc = (event) => {
  popup.forEach((value) => {
    if (event.key === "Escape" && value.classList.contains("popup_is-opened")) {
      value.classList.remove("popup_is-opened");
      document.removeEventListener("keydown", KeyHandlerEsc); // Удаляем обработчик
    }
  });
};

export {
  modalWindow,
  popupEdit,
  popupNewCard,
  popupEditProfile,
  popupNewCardOpened,
  popupClose,
};
