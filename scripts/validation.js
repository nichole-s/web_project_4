// ******NO LONGER IN USE********
// function showErrorMessage(input, form, {errorClass, inputErrorClass, ...rest}) {
//   const error = form.querySelector(`#${input.id}-error`);

//   error.textContent = input.validationMessage;

//   error.classList.add(errorClass);
//   input.classList.add(inputErrorClass);
// }

// function hideErrorMessage(input, form, {errorClass, inputErrorClass, ...rest}) {
//   const error = form.querySelector(`#${input.id}-error`);

//   error.textContent = '';

//   error.classList.remove(errorClass);
//   input.classList.remove(inputErrorClass);
// }

// function checkInputValidity(input, form, rest) {

//   if(input.validity.valid) {
//     hideErrorMessage(input, form, rest)
//   } else {
//     showErrorMessage(input, form, rest)
//   }
// }

// const toggleButtonState = (inputs, submitButton, {inactiveButtonClass}) => {
//   const isValid = inputs.every(input => input.validity.valid);

//   if(isValid) {
//     submitButton.classList.remove(inactiveButtonClass)
//   } else {
//       submitButton.classList.add(inactiveButtonClass)
//   }
// }

// function enableValidation({formSelector, inputSelector, submitButtonSelector, ...rest}) {
//   const forms = Array.from(document.querySelectorAll(formSelector));

//   forms.forEach((form) => {
//     form.addEventListener('submit', ((e) => {
//       e.preventDefault()
//     }));

//     const inputs = Array.from(form.querySelectorAll(inputSelector));
//     const submitButton = form.querySelector(submitButtonSelector);

//     inputs.forEach((input) => {
//       input.addEventListener('input', () => {
//         checkInputValidity(input, form, rest);
//         toggleButtonState(inputs, submitButton, rest);
//       })
//     })
//   })
// }

// enableValidation({
//   formSelector: ".modal__form",
//   inputSelector: ".modal__input",
//   submitButtonSelector: ".modal__submit",
//   inactiveButtonClass: "modal__submit_disabled",
//   inputErrorClass: "modal__input_type_error",
//   errorClass: "modal__error_visible",
// });