import "./index.css";
import FormValidator from "../components/FormValidator.js";
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
} from "../utils/constants.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation";
import UserInfo from "../components/UserInfo.js";
import headerLogoSrc from "../images/logo-vector.svg";
import avatarPhotoSrc from "../images/avatar-photo.jpg";
import Api from "../utils/Api.js";

// Make sure logo and avatar image show on page
const logoImage = document.getElementById("header-logo");
logoImage.src = headerLogoSrc;

// const avatarImage = document.getElementById("avatar-photo");
// avatarImage.src = avatarPhotoSrc;

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
const editProfileFormValidator = new FormValidator(defaultConfig, formEdit);
const editAvatarFormValidator = new FormValidator(defaultConfig, formAvatar);

addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();

// Create instance of the enlarged photo popup
const imagePopup = new PopupWithImage({
  popupSelector: ".modal-type-image",
});
imagePopup.setEventListeners();

//Create form to confirm delete
const deleteCardPopup = new PopupWithConfirmation({
  popupSelector: ".modal-type-delete-card",
});
deleteCardPopup.setEventListeners();

let userID;
let cardList;

//Create instance of UserInfo

const userInfo = new UserInfo({
  userNameSelector: ".profile__name",
  userJobSelector: ".profile__profession",
  avatar: ".profile__avatar-photo",
});

function createCard(data) {
  const card = new Card(
    {
      data: { ...data, userID },
      handleCardClick: (name, link) => {
        imagePopup.open(name, link);
      },
      handleDeleteClick: () => {
        deleteCardPopup.open(() => {
          deleteCardPopup.renderLoading(true);
          api
            .removeCard(data._id)
            .then(() => {
              card.handleDelete();
              deleteCardPopup.close();
            })
            .catch((err) =>
              console.log(`An error occurred when deleting card: ${err}`)
            )
            .finally(() => deleteCardPopup.renderLoading(false));
        });
      },
      handleCardLike: () => {
        if (card.cardLiked()) {
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
  .then(([cardData, userData]) => {
    userID = userData._id;
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
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
    });
    userInfo.setUserAvatar(userData.avatar);
  })
  .catch((err) =>
    console.log(
      `An error occurred when loading initial user and card data: ${err}`
    )
  );

// Create form to add new cards
const addCardPopup = new PopupWithForm({
  popupSelector: ".modal-type-add-card",
  handleSubmit: (data) => {
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
  addCardFormValidator.resetValidation();
});

//Create form to change user info

const editProfilePopup = new PopupWithForm({
  popupSelector: ".modal-type-edit-profile",
  handleSubmit: (data) => {
    const { modal__name: name, modal__profession: about } = data;
    editProfilePopup.renderLoading(true);
    api
      .setUserInfo({ name, about })
      .then((res) => {
        userInfo.setUserInfo({ name: res.name, about: res.about });
        editProfilePopup.close();
      })
      .catch((err) =>
        console.log(`An error occurred when loading user profile data: ${err}`)
      )
      .finally(() => editProfilePopup.renderLoading(false));
  },
});

editProfilePopup.setEventListeners();

//Create event listener for Profile Edit Button
editButton.addEventListener("click", () => {
  const { userName, userJob } = userInfo.getUserInfo();
  editProfilePopup.open();
  editProfileFormValidator.resetValidation();
  modalName.value = userName;
  modalProfession.value = userJob;
});

//Create form to update profile picture

const editAvatarPopup = new PopupWithForm({
  popupSelector: ".modal-type-edit-avatar",
  handleSubmit: (data) => {
    const avatarLink = data.modal__avatarurl;
    editAvatarPopup.renderLoading(true);
    api
      .setUserAvatar(avatarLink)
      .then((data) => {
        userInfo.setUserAvatar(avatarLink);
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
  editAvatarFormValidator.resetValidation();
});
