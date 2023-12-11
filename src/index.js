import "./pages/index.css";
import { initialCards } from "./components/cards/cards";
import { openImg } from "./components/cards/open-card.js";
import { submitNewCard, cardForm } from "./components/cards/new-card.js";
import {
  handleFormSubmit,
  editForm,
  valueEditForm,
} from "./components/modal/edit-profile.js";
import {
  openModalWindow,
  popupEdit,
  popupNewCard,
  popupEditProfile,
  popupNewCardOpened,
} from "./components/modal/model.js";

import {
  createCard,
  addCard,
  deleteCard,
  like,
} from "./components/cards/card.js";

// @todo: Вывести карточки на страницу
initialCards.forEach(({ link, name }) => {
  const cardData = createCard(link, name, deleteCard, openImg, like);
  addCard(cardData);
});

//Модальное окно редактирования профиля
popupEditProfile.addEventListener(
  "click",
  () => openModalWindow(popupEdit),
  valueEditForm()
);

//Модальное окно добавления карточки
popupNewCardOpened.addEventListener("click", () =>
  openModalWindow(popupNewCard)
);

//Слушатель для изменения профиля
editForm.addEventListener("submit", handleFormSubmit);

//Слушатель для добавления новой карточки в список
cardForm.addEventListener("submit", submitNewCard);

//__________________________________________________________________________________________//
