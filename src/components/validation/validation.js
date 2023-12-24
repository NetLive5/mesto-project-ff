//inputList = Список полей формы.
//formElement = Это форма где наши поля
//---------------------------------------------------------------------------------------------------------------------------------------------------//

import {
  isValidURL,
  isValidInputCharacters,
  isValidImageURL,
} from "./validation-regex"; // Импорт функция с регулярными выражениями

// Функция отображения сообщения об ошибке для конкретного поля ввода
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); // Создаем константу, предназначенную для отображения ошибок валидации для конкретного поля
  inputElement.classList.add("popup__input_type_error"); // Добавляем стили ошибки
  errorElement.textContent = errorMessage; // Задаем текст сообщения об ошибке
  errorElement.classList.add("popup__input-error_active"); // Добавляем стили для активации сообщения об ошибке
};

// Функция скрытия сообщения об ошибке для конкретного поля ввода
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error"); // Удаляем стили ошибки
  errorElement.classList.remove("popup__input-error_active"); // Удаляем стили для активации сообщения об ошибке
  errorElement.textContent = ""; // Очищаем текст сообщения об ошибке
};

// Функция проверки валидности конкретного поля ввода
const checkInputValidity = (formElement, inputElement) => {
  const errorMessage =
    "Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы";
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage); // Показываем сообщение об ошибке браузера
  } else if (inputElement.type === "url" && !isValidURL(inputElement.value)) {
    showInputError(formElement, inputElement, "Введите корректный URL"); // Показываем сообщение об ошибке для URL
  } else if (
    inputElement.name === "link" &&
    !isValidImageURL(inputElement.value)
  ) {
    showInputError(
      formElement,
      inputElement,
      "Введите корректный URL изображения"
    ); // Показываем сообщение об ошибке для URL изображения
  } else if (!isValidInputCharacters(inputElement)) {
    showInputError(formElement, inputElement, errorMessage); // Показываем сообщение об ошибке для недопустимых символов
  } else {
    hideInputError(formElement, inputElement); // Скрываем сообщение об ошибке, если все в порядке
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
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true; // Если хотя бы одно поле невалидно, делаем кнопку неактивной
    buttonElement.classList.add("popup__button_disabled");
  } else {
    buttonElement.disabled = false; // Если все поля валидны, делаем кнопку активной
    buttonElement.classList.remove("popup__button_disabled");
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

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement);
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
    hideInputError(formElement, inputElement);
  });

  buttonElement.disabled = true;
  buttonElement.classList.add(validationConfig.inactiveButtonClass);
};

export { enableValidation, clearValidation };
