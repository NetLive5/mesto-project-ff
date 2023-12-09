// Находим форму
const formElement = document.querySelector(".popup__form");
// Находим поля формы
const nameInput = formElement.querySelector(".popup__input_type_name");
const aboutInput = formElement.querySelector(".popup__input_type_description");
// Находим элементы на странице, которые будем обновлять
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// Берем начальные значения полей формы
nameInput.value = profileTitle.textContent;
aboutInput.value = profileDescription.textContent;

// Обработчик «отправки» формы
const handleFormSubmit = (evt) => {
  evt.preventDefault(); // Отменяем стандартную отправку формы

  const newName = nameInput.value; // Получаем значения из полей формы
  const newDescription = aboutInput.value;

  profileTitle.textContent = newName; // Обновляем элементы на странице новыми значениями
  profileDescription.textContent = newDescription;
};

export { handleFormSubmit, formElement };
