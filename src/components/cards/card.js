// @todo: Темплейт карточки
import { removeCard, toggleLike } from "../fetch/apiCreateCard";

export const cardList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
const createCard = (
  srcCard,
  titleCard,
  removeCard,
  openImg,
  likesCount,
  isOwnCard,
  cardId
) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImg = cardElement.querySelector(".card__image");
  const likesCounter = cardElement.querySelector(".card__like-count");

  // Наполнение карточки
  cardElement.querySelector(".card__image").src = srcCard;
  cardElement.querySelector(".card__title").textContent = titleCard;
  cardElement.querySelector(".card__image").alt = titleCard;

  // Показываем/скрываем кнопку удаления
  if (isOwnCard) {
    deleteButton.style.display = "block";
  } else {
    deleteButton.style.display = "none";
  }

  const isLiked = localStorage.getItem(`like-${cardId}`) === "true"; // Проверяем состояние лайка из локального хранилища //Если isLiked true будет удален, если false - добавлен.
  likeButton.classList.toggle("card__like-button_is-active", isLiked); // Устанавливаем состояние лайка, метод toggle класса
  likesCounter.textContent = likesCount; // Устанавливаем начальное значение лайков на данных полученных с сервера

  //Слушатель на like карточки
  likeButton.addEventListener("click", () => {
    like(cardId, likeButton, likesCounter); //cardId - id //likeButton - кнопка лайка //Счетчик лайков
  });

  //Слушатель на удаление карточки
  deleteButton.addEventListener("click", (evt) => {
    const isConfirmed = confirm("Вы уверены, что хотите удалить эту карточку?");
    if (isConfirmed) {
      removeCard(evt, cardId);
    }
  });

  //Слушатель для увеличения карточки
  cardImg.addEventListener("click", () => openImg(srcCard, titleCard));

  return cardElement;
};

// Функция добавления карточки
const addCard = (item) => {
  cardList.append(item);
};

// Функция удаления карточки
const deleteCard = (event, cardId) => {
  const cardElement = event.target.parentElement;
  // Отправляем на сервер для удаления карточки
  removeCard(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((error) => {
      console.error(error);
    });
};

// Функция лайка карточки
const like = (cardId, likeButton, likesCounter) => {
  const isLiked = likeButton.classList.contains("card__like-button_is-active"); // Получаем текущее состояние лайка

  toggleLike(cardId, isLiked)
    .then((updatedCard) => {
      const likedCards = JSON.parse(localStorage.getItem("likedCards")) || {}; // Получаем данные о лайках из локального хранилища или создаем новый объект,
      likedCards[cardId] = updatedCard.likes.length; // Обновляем количество лайков для конкретной карточки в хранилище
      localStorage.setItem("likedCards", JSON.stringify(likedCards)); // Сохраняем обновленные данные в хранилище
      likesCounter.textContent = likedCards[cardId]; // Обновляем счетчик лайков на странице

      likeButton.classList.toggle("card__like-button_is-active", !isLiked); // Обновляем стиль кнопки в зависимости от состояния лайка

      localStorage.setItem(`like-${cardId}`, String(!isLiked)); // Сохраняем состояние лайка в локальное хранилище
      console.log("Пользователи, лайкнувшие карточку:", updatedCard.likes);
    })
    .catch((error) => {
      console.error(error);
    });
};

export { createCard, addCard, deleteCard, like };
