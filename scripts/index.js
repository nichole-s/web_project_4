import FormValidator from './FormValidator.js';
import { toggleModal } from './utils.js'
import { modalEdit, modalAdd, modalImage, modals, modalForm, initialCards } from './constants.js';
import Card from './Card.js';

const defaultConfig = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit",
  inactiveButtonClass: "modal__submit_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

// Constants related to the form and form validation
const formAdd = modalAdd.querySelector('.modal__form_type_add-card');
const formEdit = modalEdit.querySelector('.modal__form_type_edit-profile');
const addCardFormValidator = new FormValidator(defaultConfig, formAdd);
const editCardFormValidator = new FormValidator(defaultConfig, formEdit);

addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();


// Constants related to the profile
const editButton = document.querySelector('.profile__edit');
const editProfileCloseButton = modalEdit.querySelector('.modal__exit_type_edit-profile');
const inputName = formEdit.querySelector('.modal__name');
const inputProfession = formEdit.querySelector('.modal__profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

// Constants related to adding a card
const addButton = document.querySelector('.profile__add');
const addCardCloseButton = modalAdd.querySelector('.modal__exit_type_add-card');
const inputCardName = formAdd.querySelector('.modal__card-name');
const inputCardUrl = formAdd.querySelector('.modal__card-url');

// Constants related to the image modal 
const imageCloseButton = modalImage.querySelector('.modal__exit_type_image');

// Creating initial and new cards
const cardList = document.querySelector('.photo-grid__items');

const renderCard = (data) => {
  const card = new Card(data, '#card-template');

  cardList.prepend(card.generateCard());
}
  
initialCards.forEach((data) => {

  renderCard(data);

})

modals.forEach((modal) => {
  document.addEventListener('click', (e) => {
    if ((e.target === modal) && (e.target !== modalForm)) {
      modal.classList.remove('modal_visible');
    }

  })
})

editButton.addEventListener('click', () => {

 toggleModal(modalEdit);

 inputName.value = profileName.textContent;
 inputProfession.value = profileProfession.textContent;

});

editProfileCloseButton.addEventListener('click', () => {

 toggleModal(modalEdit);

});

formEdit.addEventListener('submit', (evt) => {
  
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  
  toggleModal(modalEdit);
  formEdit.reset();

});

formAdd.addEventListener('submit', (evt) => {

  evt.preventDefault();

  const name = inputCardName.value;
  const link = inputCardUrl.value;
  
  renderCard({name, link});
  toggleModal(modalAdd);
  formAdd.reset();

});  

addButton.addEventListener('click', () => {
 toggleModal(modalAdd);
});

addCardCloseButton.addEventListener('click', () => {
 toggleModal(modalAdd);
});

imageCloseButton.addEventListener('click', () => {
 toggleModal(modalImage);
});
