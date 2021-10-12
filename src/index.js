import "./index.css";
import FormValidator from './scripts/FormValidator.js';
import { 
  defaultConfig, 
  modalEdit, 
  modalAdd, 
  modalImage,
  modalAvatar, 
  modals, 
  modalForm,
  initialCards, 
  addButton, 
  editButton,
  avatarEditButton, 
  profileName, 
  profileProfession,
  profileAvatar,  
  formAdd, 
  formEdit,
  formAvatar,
  cardSection,
  modalName,
  modalProfession
 } from './scripts/constants.js';
import Card from './scripts/Card.js';
import Section from './scripts/Section.js';
import Popup from './scripts/Popup.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';
import headerLogoSrc from './images/logo-vector.svg';
import avatarPhotoSrc from './images/avatar-photo.jpg';
import Api from "./scripts/Api.js";

// Make sure logo and avatar image show on page
const logoImage = document.getElementById('header-logo');
logoImage.src = headerLogoSrc;  

const avatarImage = document.getElementById('avatar-photo');
avatarImage.src = avatarPhotoSrc;

//Create instance of Api with my user information
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-9",
  headers: {
    authorization: "c414c53f-8fa5-4257-bec2-8a32bc52d96c",
    "Content-Type": "application/json"
  }
});

// Get current user ID 
//const currentUser = api.getUserInfo();

// Create the instance of form validator for the edit profile and add photo card forms
const addCardFormValidator = new FormValidator(defaultConfig, formAdd);
const editCardFormValidator = new FormValidator(defaultConfig, formEdit);
const avatarEditFormValidator = new FormValidator(defaultConfig, formAvatar);

addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();
avatarEditFormValidator.enableValidation();

// Create instance of the enlarged photo popup
const imagePopup = new PopupWithImage({
  popupSelector: '.modal-type-image'});
imagePopup.setEventListeners(); 

//Create instance of user
//const newUserInfo = new UserInfo({ userNameSelector: '.profile__name', userJobSelector: '.profile__profession', avatar: '.profile__avatar'});

// Get initial server data
api.getServerInfo()
 .then(([cardData, serverInfo]) => {
   const cardList = new Section({
     items: cardData,
     renderer: (data) => {
      const card = new Card({data, handleCardClick: ((name, link) => {
      imagePopup.open(name, link);
    })}, '#card-template');
   }
 })
  const newUserInfo = new UserInfo({
    userNameSelector: '.profile__name',
    userJobSelector: '.profile__profession',
    avatar: '.profile__avatar',
  })
   newUserInfo.setUserInfo({ name: serverInfo.name, about: serverInfo.about, id: serverInfo._id, avatar: serverInfo.avatar});
})

// Display initial cards
api.getCardsList()
  .then(cardData => {
    const cardList = new Section({
      items: cardData,
      renderer: (data) => {
        const card = new Card({data, handleCardClick: ((name, link) => {
        imagePopup.open(name, link);
      }), handleDeleteClick: (cardID) => {
        api.removeCard(cardID);
        card.handleDelete;
      }}, '#card-template');
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
        }
      }, '.photo-grid__items');

      cardList.renderItems();

  // Create form to add new cards  
  const addFormPopup = new PopupWithForm({
    popupSelector: '.modal-type-add-card', 
    popupSubmit: (data) => {
      const {modal__cardname: name, modal__cardurl: link} = data;
      api.addCard({name, link})
      .then(data => {
        const card = new Card({data, handleCardClick: ((name, link) => {
          imagePopup.open(name, link);
        })}, '#card-template');
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
        addFormPopup.close();
      })       
    }
  })
    
  addFormPopup.setEventListeners();
    
  addButton.addEventListener('click', (e) => {
    addFormPopup.open();
  }); 

})

//Create form to change user info

const editFormPopup = new PopupWithForm({
  popupSelector: '.modal-type-edit-profile',
  popupSubmit: (data) => {
    const {modal__name:name, modal__profession:about} = data;
    api.setUserInfo({ name, about })
     .then(res => {
      newUserInfo.setUserInfo({name: res.name, about:res.about})
     });
    editFormPopup.close();
  }
})  

editFormPopup.setEventListeners();

//event listener for editButton 
editButton.addEventListener('click', (e) => {
  newUserInfo.getUserInfo();
  modalName.textContent = profileName.textContent,
  modalProfession.textContent = profileProfession.textContent,
  editFormPopup.open();
})   

//create form to confirm delete

//create form to update profile picture

const editAvatarFormPopup = new PopupWithForm({
  popupSelector: '.modal__type-edit-avatar',
  popupSubmit: (data) => {
    const avatarLink = data.modal__cardurl;
    api.setUserAvatar(avatarLink)
     .then(data => {
      profileAvatar.src = avatarLink;
      editAvatarFormPopup.close();
     });
  }
})  

editAvatarFormPopup.setEventListeners();

//event listener for Button 
avatarEditButton.addEventListener('click', (e) => {
editAvatarFormPopup.open();
})   
