export default class Card {
  // constructor({data, handleCardClick}, templateSelector) {
  //   this._link = data.link;
  //   this._name = data.name;
  //   this._templateSelector = templateSelector;
  //   this._handleCardClick = handleCardClick;
  //   this._cardTemplate = document.querySelector(templateSelector).content.querySelector('.photo-grid__item');
  //   this._id = data.id;
  // } 
  constructor(data, handleCardClick, handleDeleteClick, handleLike, userID) {
    this._link = data.link;
    this._name = data.name;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLike = handleLike;
    this._userID = userID;
    this._cardTemplate = document.querySelector
    this._ownerID = data.owner._id;
    this._likes = data.likes;
    this._id = data.id;

  }

  id() {
    return this._id;
  }

  _getCardTemplate() {
    return this._cardTemplate.cloneNode(true);
  }

  _handleLike() {
    this.classList.toggle('photo-grid__liked');  
  }

  _handleDelete(e) { 
     e.target.closest('.photo-grid__item').remove();
     e.stopPropagation();
  }

  cardLiked() {
    return this._likes.some(item => item._id === this._userID);
  }

  likeCount() {
    this._card.querySelector("photo-grid__like-count").textcontent = this._likes.length;
    if (this.cardLiked()) {
      this._cardLikeButton.classList.add("photo-grid__liked");
    } else {
      this._cardLikeButton.classList.remove("photo-grid__liked");
    }

  }

  updateLikes(likes) {
    this._likes = likes;
    this._likeCount();
  }

  _setEventListener() {
    this._cardDeleteButton = this._cloneCard.querySelector('.element__trash');
    this._cardLike.addEventListener("click", this._handleLikeIcon);
    this._cardLike.addEventListener("click", () => this._handleLike(this, this.id()));

    this._cardDeleteButton.addEventListener("click", (evt) => { this._handleDeleteClick(this.id(), evt.target.closest(".element"))});
    this._cardImage.addEventListener("click", () => this._handleCardClick());
  }

  showLikes() {
    if (this._likes.length > 0) {
      this._card.querySelector(".photo-grid__like-count").classList.add("photo-grid__like-count_visible");
    } else if (this._likes.length === 0) {
      this._card.querySelector(".photo-grid__like-count").classList.remove("photo-grid__like-count_visible");
    }
  }

  _showDeleteBtn() {
    if (this._cardOwnerID == this._userID) {
      this._cloneCard.querySelector(".photo-grid__trash").classList.add("photo-grid__trash_visible");
    }
  }


  _setEventListeners() {

    this._cardLikeButton.addEventListener("click", this._handleLike);

    this._cardRemoveButton.addEventListener("click", this._handleDelete);

    this._cardImage.addEventListener("click", () => this._handleCardClick(this._name, this._link));

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

//Project 9 requirements:
//Pull cards from the server to display on the page
//Check the id to see if the card was created by the current user or not
//If the card was created by the current user, display the delete button and allow the user to delete the card from the page and the server.
//If the user deletes the card, display the "Are you sure?" form and if the user clicks "Yes", then remove the card from the page and the server.
//Change the button text to "Saving..." while the process is loading
//Check to see how many users have liked the card and if the current user has liked the card.
//Display the total number of likes.
//If the current user has liked the card, display the filled in heart. If the current user has not liked the card, display the empty heart.
//If the current user clicks the like button on a card, update the likes with the server and toggle the filled in/empty heart.
//