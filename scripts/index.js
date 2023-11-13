// @todo: Темплейт карточки
const cardList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки
const createCard = (srcCard, titleCard, callback) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardElement.querySelector(".card__image").src = srcCard;
  cardElement.querySelector(".card__title").textContent = titleCard;
  cardElement.querySelector(".card__image").alt = titleCard;

  deleteButton.addEventListener("click", (evt) => {
    callback(evt);
  });

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

// @todo: Вывести карточки на страницу
initialCards.forEach(function ({ link, name }) {
  const cardData = createCard(link, name, deleteCard);
  addCard(cardData);
});
