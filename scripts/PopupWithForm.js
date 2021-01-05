import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor ({popupSelector, popupSubmit}) {
    super(popupSelector);
    this._popupSubmit = popupSubmit;
    this._form = this._popupElement.querySelector('.modal__form'); 
    //this._submitEventHandler = this._submitEventHandler.bind(this);
    this._submitButtonSelector = this._form.querySelector('.modal__submit');
  }

  _getInputValues() {
    const inputs = this._form.querySelectorAll('.modal__input');
    const inputValues = {};

    inputs.forEach(input => {
      inputValues[input.name] = input.value;
    });

    return inputValues

  }

  close() {
    this._form.reset();
    super.close();
  }

//  _handleFormSubmit(evt) {
//     evt.preventDefault;
//  }

//   _submitEventHandler() {
//     this._popupSubmit(this._getInputValues());
//     this.close();
//   }

//   setEventListeners() {
//     this._form.addEventListener('submit', this._submitEventHandler);
//     super.setEventListeners();
//   }

  _setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._popupSubmit(this._getInputValues());
      super.setEventListeners();
      this._form.reset();
    });
  }
}

export default PopupWithForm; 




// // Creating the PopupWithForm Class
// // Create PopupWithForm as a child class of Popup. The PopupWithForm class must comply with the following requirements:
// // It takes a callback of the form submission into the constructor, as well as the popup selector.
// // It stores a private method named _getInputValues(), which collects data from all the input fields.
// // It modifies the setEventListeners() parent method. The setEventListeners() method of the PopupWithForm class has to add the click event listener to the close icon while also adding the submit event handler.
// // It modifies the close() parent method in order to reset the form once the popup is closed.
// // Create an instance of the PopupWithForm class for each popup.
