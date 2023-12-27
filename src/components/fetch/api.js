export const getInitialCards = () => {
  return fetch("https://nomoreparties.co/v1/wff-cohort-3/cards  ", {
    method: "GET",
    headers: {
      authorization: "527ccf5e-48ed-459d-9003-516016edecdb",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch((error) => {
      console.error("Ошибка getInitialCards:", error);
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
  })
    .then((res) => {
      if (res.ok) {
        return res.json(); // Возвращаем данные о созданной карточке
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch((error) => {
      console.error("Ошибка postCards:", error);
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
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch((error) => {
      console.error("Ошибка toggleLike:", error);
    });
};

export const removeCard = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-3/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: "527ccf5e-48ed-459d-9003-516016edecdb",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch((error) => {
      console.error("Ошибка removeCard:", error);
    });
};

export const patchEdit = (newProfile) => {
  return fetch("https://nomoreparties.co/v1/wff-cohort-3/users/me ", {
    method: "PATCH",
    headers: {
      authorization: "527ccf5e-48ed-459d-9003-516016edecdb",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newProfile.name,
      about: newProfile.about,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((error) => {
      console.error("Ошибка patchEdi:", error);
    });
};

//GET
export const getEditProfile = () => {
  return fetch("https://nomoreparties.co/v1/wff-cohort-3/users/me ", {
    method: "GET",
    headers: {
      authorization: "527ccf5e-48ed-459d-9003-516016edecdb",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((userData) => {
      // Обновляем информацию о пользователе на странице
      const profileTitle = document.querySelector(".profile__title");
      const profileDescription = document.querySelector(
        ".profile__description"
      );
      const profileImage = document.querySelector(".profile__image");

      profileTitle.textContent = userData.name;
      profileDescription.textContent = userData.about;
      profileImage.src = userData.avatar;
      profileImage.alt = userData.name;

      return userData._id; // Возвращаем _id из промиса
    })
    .catch((error) => {
      console.error("Ошибка GET PROFILE :", error);
    });
};

export const patchNewAvatar = (newAvatarUrl) => {
  return fetch("https://nomoreparties.co/v1/wff-cohort-3/users/me/avatar", {
    method: "PATCH",
    headers: {
      authorization: "527ccf5e-48ed-459d-9003-516016edecdb",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      avatar: newAvatarUrl,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((error) => {
      console.error("Ошибка patchNewAvatar:", error);
    });
};
