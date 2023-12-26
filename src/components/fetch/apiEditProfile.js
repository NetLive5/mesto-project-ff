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
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`HTTP error! Status: ${res.status}`);
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
      throw new Error(`HTTP error! Status: ${res.status}`);
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
      console.error("Fetch error:", error);
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
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`HTTP error! Status: ${res.status}`);
  });
};
