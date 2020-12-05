import { modalEdit, modalAdd, modalImage, modals, modalForm, modalImageFigure, modalImageCaption } from './constants.js';

export function toggleModal(modal) {
  modal.classList.toggle('modal_visible');

   const escClose = (e) => {
    if(e.key === 'Escape'){
      modalEdit.classList.remove('modal_visible');
      modalAdd.classList.remove('modal_visible');
      modalImage.classList.remove('modal_visible');
    }
  }

  if(modal.classList.contains('modal_visible')) {
    document.addEventListener('keydown', escClose)
  } else {
    document.removeEventListener('keydown', escClose)
  }

}


export function displayImage(name, link) {
 
  modalImageFigure.src = link;
  modalImageFigure.alt = name;
  modalImageCaption.textContent = name;
  toggleModal(modalImage);
};