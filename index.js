
// Constants related to the profile
const editButton = document.querySelector('.profile__edit');
const modalEdit = document.querySelector('.modal__type_edit-profile');
const editProfileCloseButton = modalEdit.querySelector('.modal__exit_type_edit-profile');
const editProfileSubmitButton = modalEdit.querySelector('.modal__submit_type_edit-profile');
const formEdit = modalEdit.querySelector('.modal__form_type_edit-profile');
const inputName = formEdit.querySelector('.modal__name');
const inputProfession = formEdit.querySelector('.modal__profession');

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

// Constants related to adding a card
const addButton = document.querySelector('.profile__add');
const modalAdd = document.querySelector('.modal__type_add-card');
const addCardCloseButton = modalAdd.querySelector('.modal__exit_type_add-card');
const addCardSubmitButton = modalAdd.querySelector('.modal__submit_type_add-card');
const formAdd = modalAdd.querySelector('.modal__form_type_add-card');
const inputCardName = formAdd.querySelector('.modal__card-name');
const inputCardUrl = formAdd.querySelector('.modal__card-url');


// Constants related to the image modal
const modalImage = document.querySelector('.modal__type_image');
const imageCloseButton = modalImage.querySelector('.modal__exit_type_image');
const modalImageFigure = modalImage.querySelector('.modal__image_figure');
const modalImageCaption = modalImage.querySelector('.modal__image_caption');

// Creating initial and new cards
const cardTemplate = document.querySelector('.card-template').content.querySelector('.photo-grid__item');

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

function toggleModal(modal) {
  modal.classList.toggle('modal_visible');
}

function displayImage(title, link) {

  modalImageFigure.src = link;
  modalImageFigure.alt = title;
  modalImageCaption.textContent = title;
  toggleModal(modalImage);
  
  // const popupBackgroundImage = popupFullImage.querySelector(".popup__background");
  // popupBackgroundImage.addEventListener("click", function() {
  //   if (popupFullImage.classList.contains("popup_active")) {
  //     togglePopup(popupFullImage);
  //   }
  // })
};


const createCard = (name, link) => {
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector('.photo-grid__heading');
  const cardImage = cardElement.querySelector('.photo-grid__photo');
  const cardLikeButton = cardElement.querySelector('.photo-grid__like');
  const cardRemoveButton = cardElement.querySelector('.photo-grid__trash');
  
  cardTitle.textContent = name;
  cardImage.style.backgroundImage = `url(${link})`;
  cardImage.style.backgroundSize = "cover";

  cardLikeButton.addEventListener('click', (e) => {
    e.target.closest('.photo-grid__like').classList.toggle('photo-grid__liked');
  })

  cardRemoveButton.addEventListener('click', (e) => {
    e.target.closest('.photo-grid__item').remove();
  })

  cardImage.addEventListener('click', (e) => {
    displayImage(name, link);

  })

  return cardElement;
}

const renderCard = (name, link) => {

  cardList.prepend(createCard(name, link));

}
  
initialCards.forEach((data) => {

  renderCard(data.name, data.link);

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

});

formAdd.addEventListener('submit', (evt) => {

  evt.preventDefault();

  const inputCardName = formAdd.querySelector('.modal__card-name');
  const inputCardUrl = formAdd.querySelector('.modal__card-url');

  cardList.prepend(createCard({name: inputCardName.value, link: inputCardUrl.value}));

  toggleModal(modalAdd);

});  

addCardSubmitButton.addEventListener('click', () => {
  toggleModal(modalAdd);
})

addButton.addEventListener('click', () => {
 toggleModal(modalAdd);
 formAdd.reset();
});

addCardCloseButton.addEventListener('click', () => {
 toggleModal(modalAdd);
});

addCardSubmitButton.addEventListener('click', () => {
 toggleModal(modalAdd);
});

imageCloseButton.addEventListener('click', () => {
 toggleModal(modalImage);
});
