import { openModalWindow } from "../modal/model.js";

const popupOpenImg = document.querySelector(".popup_type_image");
const popupImage = popupOpenImg.querySelector(".popup__image");
const popupCaption = popupOpenImg.querySelector(".popup__caption");

const openImg = (srcCard, titleCard) => {
  popupImage.src = srcCard;
  popupCaption.alt = titleCard;
  popupCaption.textContent = titleCard;
  openModalWindow(popupOpenImg);
};

export { openImg };
