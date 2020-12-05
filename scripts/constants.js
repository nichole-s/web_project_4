
export const modalEdit = document.querySelector('.modal__type_edit-profile');
export const modalAdd = document.querySelector('.modal__type_add-card');
export const modalImage = document.querySelector('.modal__type_image');  
export const modals = Array.from(document.querySelectorAll('.modal'));
export const modalForm = Array.from(document.querySelectorAll('.modal__form')); 
export const modalImageFigure = modalImage.querySelector('.modal__image-figure');
export const modalImageCaption = modalImage.querySelector('.modal__image-caption');
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