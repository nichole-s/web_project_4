import FormValidator from './FormValidator.js';
//import { toggleModal } from './utils.js'
import { 
  defaultConfig, 
  modalEdit, 
  modalAdd, 
  modalImage, 
  modals, 
  modalForm, 
  initialCards, 
  addButton, 
  editButton, 
  profileName, 
  profileProfession,  
  formAdd, 
  formEdit,
  cardSection
 } from './constants.js';
import Card from './Card.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

// Creating the instance of form validator for the edit profile and add photo card forms

const addCardFormValidator = new FormValidator(defaultConfig, formAdd);
const editCardFormValidator = new FormValidator(defaultConfig, formEdit);

addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();


// Create instance of the enlarged photo popup
const imagePopup = new PopupWithImage({
  popupSelector: '.modal__type_image'});
imagePopup.setEventListeners(); 

const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    const card = new Card({data,
      handleCardClick: ((name, link) => {
        imagePopup.open(name, link)
      }) }, "#card-template");
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, '.photo-grid__items');

cardList.renderItems();

const addFormPopup = new PopupWithForm({
  popupSelector: '.modal__type_add-card',
  popupSubmit: (data) => {
    const {modal__cardname:name, modal__cardurl:link} = data;

    const nextCard = new Card ({
      data,
      handleCardClick: ((name, link) => {
        imagePopup.open(name, link)
      }) }, "#card-template"); 
      const newCardElement = nextCard.generateCard();
    cardList.addItem(newCardElement);
   }
  })

addFormPopup.setEventListeners();

addButton.addEventListener('click', (e) => {
  addFormPopup.open();
 }); 

// const userInformation =  new UserInfo ({
//   userNameSelector: '.profile__name',
//   userJobSelector: '.profile__profession'
// });

const editFormPopup = new PopupWithForm({
  popupSelector: '.modal__type_edit-profile',
  popupSubmit: (data) => {
    const {modal__name:userName, modal__profession:userJob} = data;

    const newUser = new UserInfo('.profile__name', '.profile__profession');

    newUser.setUserInfo({userName, userJob});
}
})  


editFormPopup.setEventListeners();

 //event listener for editButton 
 editButton.addEventListener('click', (e) => {

  const userInformation =  new UserInfo ('.profile__name', '.profile__profession');
   
  const userData = userInformation.getUserInfo();
    profileName.textContent = userData.name
    profileProfession.textContent = userData.job
    // profileName.value = userData.name
    // profileProfession.value = userData.job
   
  editFormPopup.open();
}) 