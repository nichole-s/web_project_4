import FormValidator from './FormValidator.js';
//import { toggleModal } from './utils.js'
import { modalEdit, modalAdd, modalImage, modals, modalForm, initialCards, addButton, editButton, profileName, profileProfession } from './constants.js';
import Card from './Card.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

// Constants related to the form and form validation; Creating the instance of form validator for the edit profile and add photo card forms
const defaultConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit",
  inactiveButtonClass: "modal__submit_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const formAdd = modalAdd.querySelector('.modal__form_type_add-card');
const formEdit = modalEdit.querySelector('.modal__form_type_edit-profile');
const addCardFormValidator = new FormValidator(defaultConfig, formAdd);
const editCardFormValidator = new FormValidator(defaultConfig, formEdit);

addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();

// Create instance of the enlarged photo popup
const imagePopup = new PopupWithImage({
  popupSelector: '.modal__type_image'});
imagePopup.setEventListeners(); 

//Create individual cards, including initial cards
function createCard(cardData) {
  return new Card({
    data: cardData,
    handleCardClick: (name, link) => {
      imagePopup.open(name, link)
    }
  }, '.card-template').generateCard()
}

const cardsList = new Section({
  items: initialCards,
  renderer: createCard
}, '.photo-grid__items')

cardsList.renderer();


const addFormPopup = new PopupWithForm({
  popupSelector: '.modal__type_add-card',
  popupSubmit: ([name, link]) => {
    const nextCard = createCard({name, link})
    cardSection.addItem(nextCard);
   }
  })

addFormPopup.setEventListeners();

addButton.addEventListener('click', (e) => {
  addFormPopup.open();
 }); 

const userInformation =  new UserInfo ({
  userNameSelector: '.modal__name',
  userJobSelector: '.modal__profession'
})

const editFormPopup = new PopupWithForm({
  popupSelector: '.modal__type_edit-profile',
  popupSubmit: ([userNameSelector, userJobSelector]) => {
    userInformation.setUserInfo(userNameSelector, userJobSelector); 
  } 
})  


editFormPopup.setEventListeners();

 //event listener for editButton 
 editButton.addEventListener('click', (e) => {
   
  const userData = userInformation.getUserInfo();
    profileName.value = userData.name
    profileProfession.value = userData.job
   
  editFormPopup.open();
}) 