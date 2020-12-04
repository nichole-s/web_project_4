class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass; 
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formElement;
    this._inputs = [...this._form.querySelectorAll(this._inputSelector)];
  }
  _showErrorMessage(input) {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    error.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }
  _hideErrorMessage(input) {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = "";
    error.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  }
  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideErrorMessage(input);
    } else {
      this._showErrorMessage(input);
    }
  }
  _toggleButtonState() {
    const button = this._form.querySelector(this._submitButtonSelector);
    const isValid = this._inputs.every((input) => input.validity.valid);
    
    if (isValid) {
      button.classList.remove(this._inactiveButtonClass);
    } else {      
      button.classList.add(this._inactiveButtonClass);
    }
  }
  _setEventListeners() {
    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }
  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      return false;
    });
    this._setEventListeners();
  }
}
export default FormValidator;