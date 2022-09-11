import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
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

  renderLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  setEventListeners() {
    this._submitButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._popupClick();
    });
    super.setEventListeners();
  }
}

export default PopupWithConfirmation;
