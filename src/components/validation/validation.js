//inputList = Список полей формы.
//formElement = Это форма где наши поля
//---------------------------------------------------------------------------------------------------------------------------------------------------//

import {
  isValidURL,
  isValidInputCharacters,
  isValidImageURL,
} from "./validation-regex"; // Импорт функция с регулярными выражениями

// Функция отображения сообщения об ошибке для конкретного поля ввода
const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  validationConfig
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); // Создаем константу, предназначенную для отображения ошибок валидации для конкретного поля
  inputElement.classList.add(validationConfig.inputErrorClass); // Добавляем стили ошибки
  errorElement.textContent = errorMessage; // Задаем текст сообщения об ошибке
  errorElement.classList.add(validationConfig.errorClass); // Добавляем стили для активации сообщения об ошибке
};

// Функция скрытия сообщения об ошибке для конкретного поля ввода
const hideInputError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig.inputErrorClass); // Удаляем стили ошибки
  errorElement.classList.remove(validationConfig.errorClass); // Удаляем стили для активации сообщения об ошибке
  errorElement.textContent = ""; // Очищаем текст сообщения об ошибке
};

// Функция проверки валидности конкретного поля ввода
const checkInputValidity = (formElement, inputElement, validationConfig) => {
  const errorMessage =
    "Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы";
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, errorMessage, validationConfig); // Показываем сообщение об ошибке браузера
  } else if (inputElement.type === "url" && !isValidURL(inputElement.value)) {
    showInputError(
      formElement,
      inputElement,
      "Введите корректный URL",
      validationConfig
    ); // Показываем сообщение об ошибке для URL
  } else if (
    inputElement.name === "link" &&
    !isValidImageURL(inputElement.value)
  ) {
    showInputError(
      formElement,
      inputElement,
      "Введите корректный URL изображения",
      validationConfig
    ); // Показываем сообщение об ошибке для URL изображения
  } else if (!isValidInputCharacters(inputElement)) {
    showInputError(formElement, inputElement, errorMessage, validationConfig); // Показываем сообщение об ошибке для недопустимых символов
  } else {
    hideInputError(formElement, inputElement, validationConfig); // Скрываем сообщение об ошибке, если все в порядке
  }
};
// Функция для проверки наличия хотя бы одного невалидного поля
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return (
      !inputElement.validity.valid || !isValidInputCharacters(inputElement)
    ); // Проверяем валидность поля и символы в нем
  });
};

// Функция переключения состояния кнопки в зависимости от валидности полей ввода
const toggleButtonState = (inputList, buttonElement, validationConfig) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true; // Если хотя бы одно поле невалидно, делаем кнопку неактивной
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
  } else {
    buttonElement.disabled = false; // Если все поля валидны, делаем кнопку активной
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
  }
};

// Функция включения валидации для всех форм на странице
const enableValidation = (validationConfig) => {
  const formList = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault(); // Предотвращаем отправку формы по умолчанию
    });

    const inputList = Array.from(
      formElement.querySelectorAll(validationConfig.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      validationConfig.submitButtonSelector
    );

    toggleButtonState(inputList, buttonElement, validationConfig);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement, validationConfig);
        toggleButtonState(inputList, buttonElement);
      });
    });
  });
};

const clearValidation = (formElement, validationConfig) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    validationConfig.submitButtonSelector
  );

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validationConfig);
  });

  buttonElement.disabled = true;
  buttonElement.classList.add(validationConfig.inactiveButtonClass);
};

export { enableValidation, clearValidation };
