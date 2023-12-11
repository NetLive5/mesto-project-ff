// Находим форму
import { closeModalWindow, popupEdit } from "./model";

const editForm = document.forms["edit-profile"];
const name = editForm.elements.name;
const description = editForm.elements.description;
// Находим поля формы

// Находим элементы на странице, которые будем обновлять
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// Берем начальные значения полей формы

const valueEditForm = () => {
  name.value = profileTitle.textContent;
  description.value = profileDescription.textContent;
};

// Обработчик «отправки» формы
const handleFormSubmit = (evt) => {
  evt.preventDefault(); // Отменяем стандартную отправку формы

  const newName = name.value; // Получаем значения из полей формы
  const newDescription = description.value;

  profileTitle.textContent = newName; // Обновляем элементы на странице новыми значениями
  profileDescription.textContent = newDescription;

  closeModalWindow(popupEdit);
};

export { handleFormSubmit, editForm, valueEditForm };
