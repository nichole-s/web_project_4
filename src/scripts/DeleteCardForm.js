import Popup from "./Popup.js";

class PopupDeleteCard extends Popup {
  constructor(popup, popupSubmit) {
    super(popup);
    this._popupSubmit = popupSubmit;
    this._submitButton = this._popupElement.querySelector('.modal__submit_type-delete-card');
  }

  open(cardInfo, cardElement){
    super.open();
    this._info = cardInfo;
    this._card = cardElement;
  }

  removeCardElement() {
    this._cardElement.remove();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form = this._popup.querySelector(".form");
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = 'Deleting...';
      this._popupSubmit(this._info);
    });
  }
}

export default PopupDeleteCard;