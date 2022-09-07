import Popup from "./Popup.js";

class PopupDeleteCard extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._submitButton = this._popupElement.querySelector(
      ".modal__submit_type-delete-card"
    );
  }

  open(popupClick) {
    super.open();
    this._popupClick = popupClick;
  }

  setEventListeners() {
    this._submitButton.addEventListener("click", () => {
      this._popupClick();
    });
    super.setEventListeners();
  }
}

export default PopupDeleteCard;