import { popupAvatarOpen, popupAvatar } from "../model/popap-import.js";
import { openModalWindow, closeModalWindow } from "./model.js";
import { patchNewAvatar } from "../fetch/apiEditProfile.js";
import { clearValidation } from "../validation/validation.js";
import { avatarFormConfig } from "../validation/validation-config.js";

// Находим поле формы для аватара
const avatarForm = document.forms["avatar-edit"];
const avatarInput = avatarForm.elements.avatar;

const openAvatarPopup = () => {
  clearValidation(avatarForm, avatarFormConfig);
  openModalWindow(popupAvatarOpen);
};

const handleAvatarChange = (evt) => {
  evt.preventDefault();
  const newAvatarUrl = avatarInput.value; // Получаем новую ссылку на аватар из поля ввода

  // Отправляем запрос на изменение аватара
  patchNewAvatar(newAvatarUrl)
    .then((updatedUserData) => {
      popupAvatar.src = updatedUserData.avatar; // Обновляем отображение аватарки
      popupAvatar.alt = updatedUserData.name;
      avatarForm.reset();
    })
    .catch((error) => {
      console.error("Error updating avatar:", error);
    });

  closeModalWindow(popupAvatarOpen);
};

export { handleAvatarChange, avatarForm, openAvatarPopup };
