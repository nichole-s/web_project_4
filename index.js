const editButton = document.querySelector('.profile__edit');
const modalCloseButton = document.querySelector('.modal__exit');
const modal = document.querySelector('.modal');
const inputName = document.querySelector('.modal__name');
const inputProfession = document.querySelector('.modal__profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const form = document.querySelector('.modal__form');
const modalSubmit = document.querySelector('.modal__submit');

function toggleModal() {
  modal.classList.toggle('modal_visible');
}

editButton.addEventListener('click', toggleModal)
modalCloseButton.addEventListener('click', toggleModal)
modalSubmit.addEventListener('click', toggleModal)

form.addEventListener('submit', function(e) {
  e.preventDefault();

  profileName.textContent = inputName.value
  profileProfession.textContent = inputProfession.value
})