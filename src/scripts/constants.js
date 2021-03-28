export const cardList = document.querySelector('.photo-grid__items');
export const modalEdit = document.querySelector('.modal__type-edit-profile');
export const editButton = document.querySelector('.profile__edit');
export const editProfileCloseButton = modalEdit.querySelector('.modal__exit_type_edit-profile');
export const modalAdd = document.querySelector('.modal__type-add-card');
export const addButton = document.querySelector('.profile__add');
export const addCardCloseButton = modalAdd.querySelector('.modal__exit_type_add-card');
export const modalImage = document.querySelector('.modal__type-image');  
export const imageCloseButton = modalImage.querySelector('.modal__exit_type_image');
export const modals = Array.from(document.querySelectorAll('.modal'));
export const modalForm = Array.from(document.querySelectorAll('.modal__form')); 
export const modalImageFigure = modalImage.querySelector('.modal__image-figure');
export const modalImageCaption = modalImage.querySelector('.modal__image-caption');
export const profileName = document.querySelector('.profile__name');
export const profileProfession = document.querySelector('.profile__profession');
export const formAdd = modalAdd.querySelector('.modal__form_type_add-card');
export const formEdit = modalEdit.querySelector('.modal__form_type_edit-profile');
export const cardSection = document.querySelector('.photo-grid__items');
export const defaultConfig = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__submit",
    inactiveButtonClass: "modal__submit_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
  };

export const initialCards = [
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