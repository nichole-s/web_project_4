const editButton = document.querySelector('.profile__edit');
const modalEdit = document.querySelector('.modal__type_edit-profile');
const editProfileCloseButton = modalEdit.querySelector('.modal__exit_type_edit-profile');
const editProfileSubmitButton = modalEdit.querySelector('.modal__submit_type_edit-profile');
const formEdit = modalEdit.querySelector('.modal__form_type_edit-profile');
const inputName = modalEdit.querySelector('.modal__name');
const inputProfession = modalEdit.querySelector('.modal__profession');

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

const addButton = document.querySelector('profile__add');
const modalAdd = document.querySelector('.modal__type_add-card');
const addCardCloseButton = modalAdd.querySelector('.modal__exit_type_add-card');
const addCardSubmitButton = modalAdd.querySelector('.modal__submit_type_add-card');
const formAdd = modalAdd.querySelector('.modal__form_type_add-card');
const inputCardName = modalAdd.querySelector('.modal__card-name');
const inputCardUrl = modalAdd.querySelector('.modal__card-url');

const modalImage = document.querySelector('.modal__type_image');
const imageCloseButton = modalImage.querySelector('.modal__exit_type_image');


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

const createCard = (data) => {
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector('.photo-grid__heading');
  const cardImage = cardElement.querySelector('.photo-grid__photo');
  const cardLikeButton = cardElement.querySelector('.photo-grid__like');
  const cardRemoveButton = cardElement.querySelector('.photo-grid__trash');
  
  cardTitle.textContent = data.name;
  cardImage.style.backgroundImage = `url(${data.link})`;

  cardLikeButton.addEventListener('click', () => {
    cardLikeButton.classList.toggle('.photo-grid__liked');
  })

  cardRemoveButton.addEventListener('click', (e) => {
    e.target.closest('.photo-grid__item').remove();
  })

  cardImage.addEventListener('click', (e) => {
    e.target.closest('.modal__type_image').toggleModal(modalImage);
  })

  return cardElement;
}

const renderCard = (data) => {
  cardList.prepend(createCard(data));

}
  
initialCards.forEach((data) => {
  renderCard(data);
})

function toggleModal(modal) {
  modal.classList.toggle('.modal_visible');
}

editButton.addEventListener('click', () => {
  toggleModal(modalEdit);
});

editProfileCloseButton.addEventListener('click', () => {
  toggleModal(modalEdit);
});

editProfileSubmitButton.addEventListener('click', () => {
  toggleModal(modalEdit);
});

addButton.addEventListener('click', () => {
  toggleModal(modalAdd);
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

//function formSubmitHandler(evt) {
//  evt.preventDefault();
//  profileName.textContent = inputName.value
//  profileProfession.textContent = inputProfession.value
//  toggleModal(modalEdit);
//}

//formEdit.addEventListener('submit', formSubmitHandler);




//formAdd.addEventListener('submit', function (e) {
//  e.preventDefault();

//  renderCard(data);
 
//  toggleModal(modalAdd);
//})


//The following is the start of transitioning to the bubbling method for event listeners. I intend on switching 
//before submitting the final project

//cardList.addEventListener('click', (e) => {
//  if(e.target.classList.includes('.photo-grid__trash')) {  
//    e.target.closest('.photo-grid__item').remove();
//  }

//  if(e.target.classList.includes('.photo-grid__like')) {
//    cardLikeButton.classlist.toggle('photo-grid__liked');
//}

//  if(e.target.classList.includes('.photo-grid__photo')) {
//    e.target.closest('.modal__type_image').toggleModal(modalImage);
//}
//})