class UserInfo {
  constructor({ userNameSelector, userJobSelector, avatar }) {
    this._profileNameElement = document.querySelector(userNameSelector);
    this._profileJobElement = document.querySelector(userJobSelector);
    this._avatarElement = document.querySelector(avatar);
  }

  setUserProfile({ name, about }) {
    this._profileNameElement.textContent = name;
    this._profileJobElement.textContent = about;
  }

  setUserAvatar(avatar) {
    this._avatarElement.src = avatar;
  }

  setUserInfo({ name, about, avatar }) {
    this.setUserProfile({ name, about });
    this.setUserAvatar(avatar);
  }

  getUserInfo() {
    return {
      userName: this._profileNameElement.textContent,
      userJob: this._profileJobElement.textContent,
    };
  }

  getAvatar() {
    return {
      avatar: this._avatarElement,
    };
  }
}

export default UserInfo;
