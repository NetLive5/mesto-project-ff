import "./pages/index.css";
import { initialCards } from "./components/cards/cards";
import { openImg } from "./components/cards/open-card.js";
import { newCard, cardForm } from "./components/cards/new-card.js";
import {
  handleFormSubmit,
  formElement,
} from "./components/modal/edit-profile.js";
import {
  modalWindow,
  popupEdit,
  popupNewCard,
  popupEditProfile,
  popupNewCardOpened,
} from "./components/modal/model.js";

import {
  createCard,
  addCard,
  deleteCard,
} from "./components/cards/function-card.js";

// @todo: Вывести карточки на страницу
initialCards.forEach(({ link, name }) => {
  const cardData = createCard(link, name, deleteCard, openImg);
  addCard(cardData);
});

//Модальное окно редактирования профиля
popupEditProfile.addEventListener("click", () => modalWindow(popupEdit));

//Модальное окно добавления карточки
popupNewCardOpened.addEventListener("click", () => modalWindow(popupNewCard));

//Слушатель для изменения профиля
formElement.addEventListener("submit", handleFormSubmit);

//Слушатель для добавления новой карточки в список
cardForm.addEventListener("submit", newCard);

//__________________________________________________________________________________________//
