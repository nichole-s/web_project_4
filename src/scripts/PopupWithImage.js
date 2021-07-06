import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor ({popupSelector}) {
    super(popupSelector);
  }
  
  open(name, link) {
    super.open(name, link);
    
    this._popupElement.querySelector('.modal__image-figure').src = link;
    this._popupElement.querySelector('.modal__image-caption').textContent = name;
    this._popupElement.querySelector('.modal__image-caption').alt = name;
  }
}

export default PopupWithImage; 

// Creating the PopupWithImage Class
// Create the PopupWithImage class as a child class of Popup. 
// This class has to change the parent open() method. 
// In the open() method of the PopupWithImage class, 
// you need to add an image to the popup and the corresponding image src attribute along with a caption for the image.