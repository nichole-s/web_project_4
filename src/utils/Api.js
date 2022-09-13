export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.statusText}`);
  }

  getCardsList() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._checkServerResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkServerResponse);
  }

  getServerInfo() {
    return Promise.all([this.getCardsList(), this.getUserInfo()]);
  }

  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._checkServerResponse);
  }

  removeCard(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}`, {
      headers: this._headers,
      method: "DELETE",
    }).then(this._checkServerResponse);
  }

  addLike(cardID) {
    return fetch(`${this._baseUrl}/cards/likes/${cardID}`, {
      headers: this._headers,
      method: "PUT",
    }).then(this._checkServerResponse);
  }

  removeLike(cardID) {
    return fetch(`${this._baseUrl}/cards/likes/${cardID}`, {
      headers: this._headers,
      method: "DELETE",
    }).then(this._checkServerResponse);
  }

  getLikes(cardID) {
    return fetch(`${this._baseUrl}/cards/likes/${cardID}`, {
      headers: this._headers,
    }).then(this._checkServerResponse);
  }

  setUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._checkServerResponse);
  }

  setUserAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar/`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._checkServerResponse);
  }
}
