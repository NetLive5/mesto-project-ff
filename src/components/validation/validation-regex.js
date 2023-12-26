// Функция для проверки введенного URL изображения
const isValidImageURL = (url) => {
  // Пример регулярного выражения для проверки URL изображения (jpg, jpeg, png, gif):
  const imageUrlRegex = /\.(jpg|jpeg|png|gif)$/i;
  return imageUrlRegex.test(url);
};

// Функция для проверки введенных символов
const isValidInputCharacters = (inputElement) => {
  // Исключаем проверку для поля ссылки
  if (inputElement.type === "url") {
    return true;
  }
  const allowedCharactersRegex = /^[a-zA-Zа-яА-ЯёЁ\s\,\.-]+$/;
  return allowedCharactersRegex.test(inputElement.value);
};

// Функция для проверки введенного URL
const isValidURL = (url) => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return urlRegex.test(decodeURIComponent(url));
};
export { isValidURL, isValidInputCharacters, isValidImageURL };
