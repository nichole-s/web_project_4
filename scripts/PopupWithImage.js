import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor ({popupSelector}) {
    super(popupSelector);
    //this._modalImageFigure = this.popupElement.querySelector('.modal__image-figure');
    //this._modalImageCaption = this.popupElement.querySelector('.modal__image-caption');
  }

  // Add functionality to open popup with data inserted
  open(name, link) {
    super.open(name, link);
    //this._modalImageFigure.src = link;
    //this._modalImageCaption.textContent = name;
    //this._modalImageFigure.alt = name;
    
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