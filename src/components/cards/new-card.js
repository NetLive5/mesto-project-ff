import { createCard, deleteCard, like } from "./card.js";
import { closeModalWindow } from "../modal/model.js";
import { cardList } from "./card.js";
import { openImg } from "./open-card.js";
import { popupNewCard } from "../modal/popap-import.js";

const cardForm = document.forms["new-place"];
const newName = cardForm.elements["place-name"];
const newUrl = cardForm.elements.link;

const submitNewCard = (evt) => {
  evt.preventDefault();
  const Name = newName.value; // Сохраняем новые данные из формы , которые ввели
  const Url = newUrl.value;
  const card = createCard(Url, Name, deleteCard, openImg, like); // для новой карточки создаем переменную и передаем функцию создания карточки
  cardList.prepend(card); //Добавляем карточку в начало списка
  cardForm.reset(); // Очищаем форму после submit
  closeModalWindow(popupNewCard); //Убирает модальное окно удалением класса
};

export { submitNewCard, cardForm };
