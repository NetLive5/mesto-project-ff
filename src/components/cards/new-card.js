import { createCard, deleteCard } from "./card.js";
import { closeModalWindow, openModalWindow } from "../model/model.js";
import { cardList } from "../../index";
import { openImg } from "./open-card.js";
import { popupNewCard } from "../model/popap-import.js";
import { clearValidation } from "../validation/validation.js";
import { newCardConfig } from "../validation/validation-config.js";
import { postCards } from "../fetch/api.js";

const cardForm = document.forms["new-place"];
const newName = cardForm.elements["place-name"];
const newUrl = cardForm.elements.link;
const cardButton = cardForm.elements["new-card-button"];

const openCreateCard = () => {
  clearValidation(popupNewCard, newCardConfig);
  openModalWindow(popupNewCard);
};

const submitNewCard = (evt) => {
  cardButton.textContent = "Сохранение...";
  evt.preventDefault();
  const nameInput = newName.value; // Сохраняем новые данные из формы , которые ввели
  const urlInput = newUrl.value;
  postCards({ name: nameInput, link: urlInput })
    .then(({ link, name, _id }) => {
      const card = createCard(link, name, deleteCard, openImg, 0, true, _id); // для новой карточки создаем переменную и передаем функцию создания карточки
      cardList.prepend(card); //Добавляем карточку в начало списка
      cardForm.reset(); // Очищаем форму после submit
      closeModalWindow(popupNewCard); //Убирает модальное окно удалением класса
      clearValidation(cardForm, newCardConfig); // Очищаем ошибки после отправления
    })
    .catch((error) => {
      console.error("Error posting new card:", error);
    })
    .finally(() => {
      cardButton.textContent = "Сохранить";
    });
};

export { submitNewCard, cardForm, openCreateCard };

/*
link - Url картинки для карточки 
name - Имя карточки 
deleteCard - функция удаления карточки 
openImg - функция открытия карточки
0 - счетчик лайков карточки с 0 
true - видимость карточки что бы могли удалять только свои 
_id - id карточки
*/
