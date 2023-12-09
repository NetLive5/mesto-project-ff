import { createCard, deleteCard, like } from "./function-card.js";
import { popupNewCard } from "../modal/model.js";
import { cardList } from "./function-card.js";

const cardForm = document.forms["new-place"];
const newName = cardForm.elements["place-name"];
const newUrl = cardForm.elements.link;

const newCard = (evt) => {
  evt.preventDefault();
  const Name = newName.value; // Сохраняем новые данные из формы , которые ввели
  const Url = newUrl.value;
  const card = createCard(Url, Name, deleteCard, like); // для новой карточки создаем переменную и передаем функцию создания карточки
  cardList.prepend(card); //Добавляем карточку в начало списка
  cardForm.reset(); // Очищаем форму после submit
  popupNewCard.classList.remove("popup_is-opened"); //Убирает модальное окно удалением класса
};

export { newCard, cardForm };
