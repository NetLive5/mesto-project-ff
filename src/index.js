import "./pages/index.css";
import { enableValidation } from "./components/validation/validation.js";
import { openImg } from "./components/cards/open-card.js";
import {
  submitNewCard,
  cardForm,
  openCreateCard,
} from "./components/cards/new-card.js";
import { validateConfig } from "./components/validation/validation-config.js";
import {
  handleFormSubmit,
  editForm,
  openEditPopup,
} from "./components/model/edit-profile.js";

import {
  popupEditProfile,
  popupNewCardOpened,
} from "./components/model/popap-import.js";

import { createCard, addCard, deleteCard } from "./components/cards/card.js";

import { getEditProfile } from "./components/fetch/apiEditProfile.js";
import { getInitialCards } from "./components/fetch/apiCreateCard.js";

import {
  popupAvatar,
  popupAvatarEdit,
} from "./components/model/popap-import.js";
import {
  handleAvatarChange,
  avatarForm,
  openAvatarPopup,
} from "./components/model/img-profile.js";

// Включение валидации
enableValidation(validateConfig);

const handleData = ([userData, initialCards]) => {
  // initialCards содержит массив начальных карточек
  // userData содержит информацию о пользователе

  // Вывести карточки на страницу
  initialCards.forEach(({ link, name, likes, _id, owner }) => {
    const isOwnCard = owner._id == userData;
    const cardData = createCard(
      link,
      name,
      deleteCard,
      openImg,
      likes.length,
      isOwnCard,
      _id
    );
    addCard(cardData);
  });
};

// Ошибка при получении данных
const handleError = (error) => {
  console.error("Fetch error:", error);
};

// Запросы на сервер
Promise.all([getEditProfile(), getInitialCards()])
  .then(handleData) // Обработка успешного получения данных
  .catch(handleError); // Обработка ошибки

//Модальное окно редактирования профиля
popupEditProfile.addEventListener("click", () => openEditPopup());

//Модальное окно добавления карточки
popupNewCardOpened.addEventListener("click", () => openCreateCard());

//Модальное окно редактирования аватарки
popupAvatarEdit.addEventListener("click", () => openAvatarPopup());

//Слушатель для изменения профиля
editForm.addEventListener("submit", handleFormSubmit);

//Слушатель для добавления новой карточки в список
cardForm.addEventListener("submit", submitNewCard);

//Слушатель для добавления нового аватара
avatarForm.addEventListener("submit", handleAvatarChange);

//__________________________________________________________________________________________//
