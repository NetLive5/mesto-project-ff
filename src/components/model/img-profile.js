import { popupAvatarOpen, popupAvatar } from "../model/popap-import.js";
import { openModalWindow, closeModalWindow } from "./model.js";
import { patchNewAvatar } from "../fetch/api.js";
import { clearValidation } from "../validation/validation.js";
import { avatarFormConfig } from "../validation/validation-config.js";

// Находим поле формы для аватара
const avatarForm = document.forms["avatar-edit"];
const avatarInput = avatarForm.elements.avatar;
const avatarButton = avatarForm.elements["avatar-button"];

const openAvatarPopup = () => {
  clearValidation(avatarForm, avatarFormConfig);
  openModalWindow(popupAvatarOpen);
};

const handleAvatarChange = (evt) => {
  evt.preventDefault();
  const newAvatarUrl = avatarInput.value; // Получаем новую ссылку на аватар из поля ввода

  avatarButton.textContent = "Сохранение...";
  // Отправляем запрос на изменение аватара
  patchNewAvatar(newAvatarUrl)
    .then((updatedUserData) => {
      popupAvatar.src = updatedUserData.avatar; // Обновляем отображение аватарки
      popupAvatar.alt = updatedUserData.name;
      avatarForm.reset();
      closeModalWindow(popupAvatarOpen);
    })
    .catch((error) => {
      console.error("Error updating avatar:", error);
    })
    .finally(() => {
      avatarButton.textContent = "Сохранить";
    });
};

export { handleAvatarChange, avatarForm, openAvatarPopup };
