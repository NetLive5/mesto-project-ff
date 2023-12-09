// @todo: Темплейт карточки

export const cardList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки
const createCard = (srcCard, titleCard, removeCard, openImg) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImg = cardElement.querySelector(".card__image");

  // Наполнение карточки
  cardElement.querySelector(".card__image").src = srcCard;
  cardElement.querySelector(".card__title").textContent = titleCard;
  cardElement.querySelector(".card__image").alt = titleCard;

  //Слушатель на удаление карточки
  deleteButton.addEventListener("click", (evt) => {
    removeCard(evt);
  });

  //Слушатель на like карточки
  likeButton.addEventListener("click", (evt) => {
    like(evt);
  });
  //Слушатель для увеличения карточки
  cardImg.addEventListener("click", () => openImg(srcCard, titleCard));

  return cardElement;
};

// @todo: Функция добавления карточки
const addCard = (item) => {
  cardList.append(item);
};

// @todo: Функция удаления карточки
const deleteCard = (event) => {
  event.target.parentElement.remove();
};

// @todo: Функция лайка карточки
const like = (evt) => {
  evt.target.classList.toggle("card__like-button_is-active");
};

export { createCard, addCard, deleteCard, like };
