import { displayImage } from './utils.js'

export default class Card {
  constructor(data, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardTemplate = document.querySelector(templateSelector).content.querySelector('.photo-grid__item');
  }


  _handleLike() {
    this._cardLikeButton.classList.toggle('photo-grid__liked');  
  }

  _handleDelete() { 
     event.target.closest('.photo-grid__item').remove();
     event.stopPropagation();
  }

  _setEventListeners() {

    this._cardLikeButton.addEventListener('click', () => { 
      this._handleLike();
    });

    this._cardRemoveButton.addEventListener('click', () => { 
      this._handleDelete();
    });

    this._cardImage.addEventListener('click', () => { 
      displayImage(this._name, this._link);
    });

  }

  generateCard() {
    this._card = this._cardTemplate.cloneNode(true);
    this._cardImage = this._card.querySelector('.photo-grid__photo');
    this._cardImage.style.backgroundImage = `url(${this._link})`;
    this._card.querySelector('.photo-grid__heading').textContent = this._name;
    this._cardLikeButton = this._card.querySelector('.photo-grid__like');
    this._cardRemoveButton = this._card.querySelector('.photo-grid__trash');
    this._setEventListeners();
    return this._card;
  }
} 