// import { modalImage, modalImageFigure, modalImageCaption } from './constants.js';

// export function toggleModal(modal) {
//   modal.classList.toggle('modal_visible');
//    const escClose = (e) => {
//     if(e.key === 'Escape'){
//       modal.classList.remove('modal_visible');
//     }
//   }
//   if(modal.classList.contains('modal_visible')) {
//     document.addEventListener('keydown', escClose)
//   } else {
//     document.removeEventListener('keydown', escClose)
//   }
// }

// export function displayImage(name, link) {
//   modalImageFigure.src = link;
//   modalImageFigure.alt = name;
//   modalImageCaption.textContent = name;
//   toggleModal(modalImage);
// };

// !!!project requires this - add function in index.js so it runs for "save" buttons before submitting!!
// export default function renderLoading(isLoading, buttonSelector) {
//   if (isLoading) {
//     buttonSelector.textContent = "Saving...";
//   } else {
//     buttonSelector.textContent = "Save";
//   }
// }