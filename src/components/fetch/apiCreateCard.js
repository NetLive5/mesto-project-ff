export const getInitialCards = () => {
  return fetch("https://nomoreparties.co/v1/wff-cohort-3/cards  ", {
    method: "GET",
    headers: {
      authorization: "527ccf5e-48ed-459d-9003-516016edecdb",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  });
};

export const postCards = (newCard) => {
  return fetch("https://nomoreparties.co/v1/wff-cohort-3/cards", {
    method: "POST",
    headers: {
      authorization: "527ccf5e-48ed-459d-9003-516016edecdb",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newCard.name,
      link: newCard.link,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json(); // Возвращаем данные о созданной карточке
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  });
};

export const toggleLike = (cardId, isLiked) => {
  const method = isLiked ? "DELETE" : "PUT";
  console.log("Toggle like request:", cardId, method, isLiked);
  return fetch(
    `https://nomoreparties.co/v1/wff-cohort-3/cards/likes/${cardId}`,
    {
      method,
      headers: {
        authorization: "527ccf5e-48ed-459d-9003-516016edecdb",
      },
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  });
};

export const removeCard = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-3/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: "527ccf5e-48ed-459d-9003-516016edecdb",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  });
};
