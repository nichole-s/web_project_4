
export default class Card {
  constructor({data, handleCardClick}, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._cardTemplate = document.querySelector(templateSelector).content.querySelector('.photo-grid__item');
  }

  _getCardTemplate() {
    return this._cardTemplate.cloneNode(true);
  }

  _displayImage() {
    modalImageFigure.src = this._link;
    modalImageFigure.alt = this._name;
    modalImageCaption.textContent = this._name;
  };

  _handleLike() {
    this.classList.toggle('photo-grid__liked');  
  }

  _handleDelete(e) { 
     e.target.closest('.photo-grid__item').remove();
     e.stopPropagation();
  }


  _setEventListeners() {

    this._cardLikeButton.addEventListener("click", this._handleLike);

    this._cardRemoveButton.addEventListener("click", this._handleDelete);

    this._cardImage.addEventListener("click", () => this._handleCardClick);

  }

  generateCard() { 
    this._card = this._getCardTemplate(); 
    this._cardImage = this._card.querySelector('.photo-grid__photo');
    this._cardImage.style.backgroundImage = `url(${this._link})`;
    this._card.querySelector('.photo-grid__heading').textContent = this._name;
    this._cardLikeButton = this._card.querySelector('.photo-grid__like'); 
    this._cardRemoveButton = this._card.querySelector('.photo-grid__trash'); 
    this._setEventListeners();
    return this._card; 
  }
}; 

//Project 7 requirements:
// Create the Card class, which creates a card with text and an image link, as per the following requirements:
// It takes card data — text and a link to the image — and a template element selector as parameters into the constructor.
// It has private methods for working with markup and adding event listeners.
// It has private methods for each event handler.
// It has one public method that returns a fully functional card element populated with data.
// Create a Card class instance for each card.

//Project 8 requirements:
// Transforming the Card Class
// Connect the Card class to the popup. 
// Make Card take the handleCardClick() function into the constructor. 
// When the user clicks on the card, this function will open the popup with an image.