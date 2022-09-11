export default class Card {
  constructor(
    { data, handleCardClick, handleDeleteClick, handleCardLike },
    templateSelector
  ) {
    this._cardData = data;
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleCardLike = handleCardLike;
    this._cardTemplate = document
      .querySelector(templateSelector)
      .content.querySelector(".photo-grid__item");
    this._id = data._id; //card id
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._userID = data.userID;
  }

  getId() {
    return this._id;
  }

  _getCardTemplate() {
    return this._cardTemplate.cloneNode(true);
  }

  handleDelete() {
    this._card.remove();
    this._card = null;
  }

  cardLiked() {
    return this._likes.some((item) => item._id === this._userID);
  }

  _renderLikes() {
    this._card.querySelector(".photo-grid__like-count").textContent =
      this._likes.length;
    if (this.cardLiked()) {
      this._cardLikeButton.classList.add("photo-grid__liked");
    } else {
      this._cardLikeButton.classList.remove("photo-grid__liked");
    }
  }

  updateLikes(likes) {
    this._likes = likes;
    this._renderLikes();
  }

  _toggleDeleteButtonVisibility() {
    if (this._ownerId === this._userID) {
      this._cardRemoveButton.classList.add("photo-grid__trash_visible");
    } else {
      this._cardRemoveButton.classList.remove("photo-grid__trash_visible");
    }
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener("click", this._handleCardLike);

    this._cardRemoveButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleDeleteClick(evt);
    });

    this._cardImage.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  generateCard() {
    this._card = this._getCardTemplate();
    this._cardImage = this._card.querySelector(".photo-grid__photo");
    this._cardImage.style.backgroundImage = `url(${this._link})`;
    this._cardName = this._card.querySelector(".photo-grid__heading");
    this._cardName.textContent = this._name;
    this._cardLikeButton = this._card.querySelector(".photo-grid__like");
    this._cardRemoveButton = this._card.querySelector(".photo-grid__trash");
    this._toggleDeleteButtonVisibility();
    this._renderLikes();
    this._setEventListeners();
    return this._card;
  }
}
