import "./index.css";
import FormValidator from './scripts/FormValidator.js';
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
 } from './scripts/constants.js';
import Card from './scripts/Card.js';
import Section from './scripts/Section.js';
import Popup from './scripts/Popup.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';
import headerLogoSrc from './../src/images/logo-vector.svg';
import avatarPhotoSrc from './../src/images/avatar-photo.jpg';

const logoImage = document.getElementById('header-logo');
logoImage.src = headerLogoSrc; 

const avatarImage = document.getElementById('avatar-photo');
avatarImage.src = avatarPhotoSrc;

// Creating the instance of form validator for the edit profile and add photo card forms

const addCardFormValidator = new FormValidator(defaultConfig, formAdd);
const editCardFormValidator = new FormValidator(defaultConfig, formEdit);

addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();


// Create instance of the enlarged photo popup
const imagePopup = new PopupWithImage({
  popupSelector: '.modal-type-image'});
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
  popupSelector: '.modal-type-add-card',
  popupSubmit: (data) => {
    const nextCard = new Card ({
      data: {
        link: data.modal__cardurl,
        name: data.modal__cardname
      },
      handleCardClick: ((name, link) => {
        imagePopup.open(name, link)
      }) 
    }, "#card-template"); 
      const newCardElement = nextCard.generateCard();
    cardList.addItem(newCardElement);
   }
  })

addFormPopup.setEventListeners();

addButton.addEventListener('click', (e) => {
  addFormPopup.open();
 }); 


const editFormPopup = new PopupWithForm({
  popupSelector: '.modal-type-edit-profile',
  popupSubmit: (data) => {
    const {modal__name:userName, modal__profession:userJob} = data;

    const newUser = new UserInfo('.profile__name', '.profile__profession');

    newUser.setUserInfo(userName, userJob);
}
})  


editFormPopup.setEventListeners();

 //event listener for editButton 
 editButton.addEventListener('click', (e) => {
  const userInformation =  new UserInfo ('.profile__name', '.profile__profession');

  const userData = userInformation.getUserInfo();
    profileName.textContent = userData.name
    profileProfession.textContent = userData.job
   
  editFormPopup.open();
})   