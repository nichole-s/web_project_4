import FormValidator from './FormValidator.js';
import { toggleModal } from './utils.js'
import { modalEdit, modalAdd, modalImage } from './constants.js';
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

// Constants related to the image modal 
const imageCloseButton = modalImage.querySelector('.modal__exit_type_image');

// Creating initial and new cards
const cardList = document.querySelector('.photo-grid__items');

const initialCards = [
  {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
      name: "Vanois National Park",
      link: "https://code.s3.yandex.net/web-code/vanois.jpg"
  },
  {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];


const renderCard = (data) => {
  const card = new Card(data, '#card-template');

  cardList.prepend(card.generateCard());
}
  
initialCards.forEach((data) => {

  renderCard(data);

})


editButton.addEventListener('click', () => {

 toggleModal(modalEdit);
 formEdit.reset();

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

  const inputCardName = formAdd.querySelector('.modal__card-name');
  const inputCardUrl = formAdd.querySelector('.modal__card-url');
  const name = inputCardName.value;
  const link = inputCardUrl.value;
  
  renderCard({name, link});
  toggleModal(modalAdd);
  formAdd.reset();

});  

addButton.addEventListener('click', () => {
 toggleModal(modalAdd);
 formAdd.reset();
});

addCardCloseButton.addEventListener('click', () => {
 toggleModal(modalAdd);
});

imageCloseButton.addEventListener('click', () => {
 toggleModal(modalImage);
});
