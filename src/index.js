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
import headerLogoSrc from './../src/images/logo-vector.svg';
import avatarPhotoSrc from './../src/images/avatar-photo.jpg';
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



// Creating the instance of form validator for the edit profile and add photo card forms

const addCardFormValidator = new FormValidator(defaultConfig, formAdd);
const editCardFormValidator = new FormValidator(defaultConfig, formEdit);

addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();


// Create instance of the enlarged photo popup
const imagePopup = new PopupWithImage({
  popupSelector: '.modal-type-image'});
imagePopup.setEventListeners(); 

// let cardList;

// const createCard = (data) => {
//   const card = new Card({data, handleCardClick: ((name, link) => {
//     imagePopup.open(name, link);
//   })}, '#card-template');
//   const cardElement = card.generateCard();
//   cardList.addItem(cardElement);
// }

// Get initial server data

api.getServerInfo()
 .then(([cardData, serverInfo]) => {
   const cardList = new Section({
     items: cardData,
     renderer: 
   })
 })


// Display initial cards

api.getCardsList()
  .then(cardData => {
    const cardList = new Section({
      items: cardData,
      renderer: (data) => {
        const card = new Card({data, handleCardClick: ((name, link) => {
        imagePopup.open(name, link);
      })}, '#card-template');
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
        api.addCard(data)
        .then(res => {
          const card = new Card({data, handleCardClick: ((name, link) => {
            imagePopup.open(name, link);
          })}, '#card-template');
          const cardElement = card.generateCard();
          cardList.addItem(cardElement);
          //const {modal__cardname: name, modal__cardurl: link} = data;
          //card({name, link});
          addFormPopup.close();

        })
        
      }
    })
    
    
    addFormPopup.setEventListeners();
    
    addButton.addEventListener('click', (e) => {
      addFormPopup.open();
     }); 

  })

 
// api.getCardsList().then(cardData => {
//   cardList = new Section({
//     items: cardData,
//     renderer: (data) => {
//       createCard(data)
//     }
//   }, '.photo-grid__items');
//   cardList.renderItems();
// })

// const addFormPopup = new PopupWithForm({
//   popupSelector: '.modal-type-add-card',
//   popupSubmit: (data) => {
//     const {modal__cardname: name, modal__cardurl: link} = data;
//     createCard({name, link});
//     addFormPopup.close();
//   }
// })


// addFormPopup.setEventListeners();

// addButton.addEventListener('click', (e) => {
//   addFormPopup.open();
//  }); 

//Create instance of UserInfo and place user data on the page

const newUserInfo = new UserInfo('.profile__name', '.profile__profession');

api.getUserInfo()
  .then(res => {
    newUserInfo.setUserInfo({userName: res.name, userJob: res.about}); 
  })

//Create form to change user info

const editFormPopup = new PopupWithForm({
  popupSelector: '.modal-type-edit-profile',
  popupSubmit: (data) => {
    const {modal__name:userName, modal__profession:userJob} = data;

    newUserInfo.setUserInfo(userName, userJob);
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





// const createCard = (data) => {
//   const card = new Card({data, handleCardClick: ((name, link) => {
//     imagePopup.open(name, link);
//   })}, '#card-template');
//   const cardElement = card.generateCard();
//   cardList.addItem(cardElement);
// }

// const cardList = new Section({
//   items: initialCards,
//   renderer: (data) => {
//     createCard(data)
//   }
// }, '.photo-grid__items');

// cardList.renderItems();

// const addFormPopup = new PopupWithForm({
//   popupSelector: '.modal-type-add-card',
//   popupSubmit: (data) => {
//     const {modal__cardname: name, modal__cardurl: link} = data;
//     createCard({name, link});
//     addFormPopup.close();
//   }
// })

// addFormPopup.setEventListeners();

// addButton.addEventListener('click', (e) => {
//   addFormPopup.open();
//  }); 

// const newUserInfo = new UserInfo('.profile__name', '.profile__profession');

// const editFormPopup = new PopupWithForm({
//   popupSelector: '.modal-type-edit-profile',
//   popupSubmit: (data) => {
//     const {modal__name:userName, modal__profession:userJob} = data;

//     newUserInfo.setUserInfo(userName, userJob);
//     editFormPopup.close();
// }
// })  

// editFormPopup.setEventListeners();

//  //event listener for editButton 
//  editButton.addEventListener('click', (e) => {

//   newUserInfo.getUserInfo();
//     modalName.textContent = profileName.textContent,
//     modalProfession.textContent = profileProfession.textContent,
//   editFormPopup.open();
// })   