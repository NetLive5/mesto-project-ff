// Находим форму
import { closeModalWindow, openModalWindow } from "./model";
import { popupEdit } from "../model/popap-import";
import { clearValidation } from "../validation/validation.js";
import { editConfig } from "../validation/validation-config.js";
import { patchEdit, getEditProfile } from "../fetch/apiEditProfile.js";
// Находим поля формы
const editForm = document.forms["edit-profile"];
const name = editForm.elements.name;
const description = editForm.elements.description;

// Находим элементы на странице, которые будем обновлять
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// Берем начальные значения полей формы
const openEditPopup = () => {
  clearValidation(editForm, editConfig);
  name.value = profileTitle.textContent;
  description.value = profileDescription.textContent;
  openModalWindow(popupEdit);
};

// Обработчик «отправки» формы
const handleFormSubmit = (evt) => {
  evt.preventDefault(); // Отменяем стандартную отправку формы

  const newName = name.value; // Получаем значения из полей формы
  const newDescription = description.value;

  profileTitle.textContent = newName; // Обновляем элементы на странице новыми значениями
  profileDescription.textContent = newDescription;

  patchEdit({ name: newName, about: newDescription }) //Передаем поля
    .then((userData) => {
      profileTitle.textContent = userData.name; // Обновляем элементы на странице новыми значениями
      profileDescription.textContent = userData.about; // Обновляем элементы на странице новыми значениями
      return getEditProfile(); //Возвращаем новые поля
    })

    .catch((error) => {
      console.error("Patch edit error:", error);
    });

  closeModalWindow(popupEdit);
};

export { handleFormSubmit, editForm, openEditPopup };
