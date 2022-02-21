import Popup from './Popup.js';

class PopupWithoutForm extends Popup {
  constructor ({popupSelector, popupClick}) {
    super(popupSelector);
    this._popupClick = popupClick; 
    this._form = this._popupElement.querySelector('.modal__form'); 
    this._confirmationButton = this._popupElement.querySelector('.modal__submit_type-delete-card')
  }

  setEventListeners() {
    this._confirmationButton.addEventListener('click', () => {
      this._popupClick(); 
    });
    super.setEventListeners();  
  }
}

export default PopupWithoutForm; 