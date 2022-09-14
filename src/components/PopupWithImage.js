import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._photo = this._popupElement.querySelector(".modal__image-figure");
    this._photoCaption = this._popupElement.querySelector(
      ".modal__image-caption"
    );
  }

  open(name, link) {
    super.open(name, link);

    this._photo.src = link;
    this._photoCaption.textContent = name;
    this._photo.alt = name;
  }
}

export default PopupWithImage;
