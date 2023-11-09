// @todo: Темплейт карточки
const cardList = document.querySelector(".places__list");

// @todo: Функция создания карточки
const addCard = (srcCard, titleCard) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__image").src = srcCard;
  cardElement.querySelector(".card__title").textContent = titleCard;

  cardList.append(cardElement);

  const resetButton = cardElement.querySelector(".card__delete-button");
  resetButton.addEventListener("click", deleteCard);
};

// @todo: Функция удаления карточки
const deleteCard = (event) => {
  const item = event.target.closest(".card");
  item.remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  addCard(item.link, item.name);
});
