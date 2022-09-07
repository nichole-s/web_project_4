import "./index.css";
import FormValidator from "./scripts/FormValidator.js";
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
  modalProfession,
} from "./scripts/constants.js";
import Card from "./scripts/Card.js";
import Section from "./scripts/Section.js";
import Popup from "./scripts/Popup.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupDeleteCard from "./scripts/PopupDeleteCard";
import UserInfo from "./scripts/UserInfo.js";
import headerLogoSrc from "./images/logo-vector.svg";
import avatarPhotoSrc from "./images/avatar-photo.jpg";
import Api from "./scripts/Api.js";

// Make sure logo and avatar image show on page
const logoImage = document.getElementById("header-logo");
logoImage.src = headerLogoSrc;

const avatarImage = document.getElementById("avatar-photo");
avatarImage.src = avatarPhotoSrc;

//Create instance of Api with my user information
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-9",
  headers: {
    authorization: "c414c53f-8fa5-4257-bec2-8a32bc52d96c",
    "Content-Type": "application/json",
  },
});

// Create the instance of form validator for the edit profile and add photo card forms
const addCardFormValidator = new FormValidator(defaultConfig, formAdd);
const editCardFormValidator = new FormValidator(defaultConfig, formEdit);
const avatarEditFormValidator = new FormValidator(defaultConfig, formAvatar);

addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();
avatarEditFormValidator.enableValidation();

// Create instance of the enlarged photo popup
const imagePopup = new PopupWithImage({
  popupSelector: ".modal-type-image",
});
imagePopup.setEventListeners();

//Create form to confirm delete
const deleteCardPopup = new PopupDeleteCard({
  popupSelector: ".modal-type-delete-card",
  // popupClick: () => {
  //   api.removeCard(Card.getId())
  //   .then((res) => {
  //     Card.handleDelete(res);
  //     deleteCardPopup.close();
  //   })
  //  }
});
deleteCardPopup.setEventListeners();

let userID;
let cardList;

//Create instance of UserInfo

const newUserInfo = new UserInfo({
  userNameSelector: ".profile__name",
  userJobSelector: ".profile__profession",
  avatar: ".profile__avatar",
});

function createCard(data) {
  const card = new Card(
    {
      data: { ...data, userID },
      handleCardClick: (name, link) => {
        imagePopup.open(name, link);
      },
      handleDeleteClick: (e) => {
        e.stopPropagation();
        deleteCardPopup.open(() => {
          api
            .removeCard(data._id)
            .then(() => {
              card.handleDelete();
              deleteCardPopup.close();
            })
            .catch((err) =>
              console.log(`An error occurred when deleting card: ${err}`)
            );
        });
      },
      handleCardLike: () => {
        card.handleLike();
        if (data.likes.some((item) => item._id === userID)) {
          api
            .removeLike(data._id)
            .then((res) => {
              card.updateLikes(res.likes);
            })
            .catch((err) =>
              console.log(`An error occurred when removing a like: ${err}`)
            );
        } else {
          api
            .addLike(data._id)
            .then((res) => {
              card.updateLikes(res.likes);
            })
            .catch((err) =>
              console.log(`An error occurred when adding a like: ${err}`)
            );
        }
      },
    },
    "#card-template"
  );
  return card.generateCard();
}

// Get initial server data, set user information, and load initial cards
api
  .getServerInfo()
  .then(([cardData, userInfo]) => {
    userID = userInfo._id;

    cardList = new Section(
      {
        items: cardData,
        renderer: (data) => {
          const cardElement = createCard(data);

          cardList.addItem(cardElement);
        },
      },
      ".photo-grid__items"
    );

    cardList.renderItems();
    newUserInfo.setUserInfo({
      name: userInfo.name,
      about: userInfo.about,
      id: userInfo._id,
      avatar: userInfo.avatar,
    });
  })
  .catch((err) =>
    console.log(
      `An error occurred when loading initial user and card data: ${err}`
    )
  );

// Create form to add new cards
const addCardPopup = new PopupWithForm({
  popupSelector: ".modal-type-add-card",
  popupSubmit: (data) => {
    const { modal__cardname: name, modal__cardurl: link } = data;
    addCardPopup.renderLoading(true);
    api
      .addCard({ name, link })
      .then((data) => {
        const cardElement = createCard(data);
        cardList.addItem(cardElement);
        addCardPopup.close();
      })
      .catch((err) =>
        console.log(`An error occurred when loading new card data: ${err}`)
      )
      .finally(() => addCardPopup.renderLoading(false));
  },
});

addCardPopup.setEventListeners();

addButton.addEventListener("click", (e) => {
  addCardPopup.open();
});

//Create form to change user info

const editProfilePopup = new PopupWithForm({
  popupSelector: ".modal-type-edit-profile",
  popupSubmit: (data) => {
    const { modal__name: name, modal__profession: about } = data;
    editProfilePopup.renderLoading(true);
    api
      .setUserInfo({ name, about })
      .then((res) => {
        newUserInfo.setUserProfile({ name: res.name, about: res.about });
      })
      .catch((err) =>
        console.log(`An error occurred when loading user profile data: ${err}`)
      )
      .finally(() => editProfilePopup.renderLoading(false));
    editProfilePopup.close();
  },
});

editProfilePopup.setEventListeners();

//Create event listener for Profile Edit Button
editButton.addEventListener("click", (e) => {
  newUserInfo.getUserInfo();
  (modalName.textContent = profileName.textContent),
    (modalProfession.textContent = profileProfession.textContent),
    editProfilePopup.open();
});

//Create form to update profile picture

const editAvatarPopup = new PopupWithForm({
  popupSelector: ".modal__type-edit-avatar",
  popupSubmit: (data) => {
    const avatarLink = data.modal__avatarurl;
    editAvatarPopup.renderLoading(true);
    api
      .setUserAvatar(avatarLink)
      .then((data) => {
        profileAvatar.src = avatarLink;
        editAvatarPopup.close();
      })
      .catch((err) =>
        console.log(`An error occured when loading avatar data: ${err}`)
      )
      .finally(() => editAvatarPopup.renderLoading(false));
  },
});

editAvatarPopup.setEventListeners();

//Create event listener for Avatar Edit Button
avatarEditButton.addEventListener("click", (e) => {
  editAvatarPopup.open();
});
