class UserInfo {
  constructor({ userNameSelector, userJobSelector, id, avatar }) {
    this._profileNameElement = document.querySelector(userNameSelector);
    this._profileJobElement = document.querySelector(userJobSelector);
    this._userNameSelector = userNameSelector;
    this._userJobSelector = userJobSelector;
    this._id = id;
    this._avatar = document.querySelector(avatar);
  }

  setUserProfile({ name, about, id }) {
    this._profileNameElement.textContent = name;
    this._profileJobElement.textContent = about;
    this._id = id;
  }

  setUserAvatar({ avatar }) {
    this._avatar.src = avatar;
  }

  setUserInfo({ name, about, id, avatar }) {
    this.setUserProfile({ name, about });
    this.setUserAvatar(avatar);
    this._id = id;
  }

  getUserInfo() {
    return {
      userName: this._profileNameElement.textContent,
      userJob: this._profileJobElement.textContent,
      id: this._id,
      avatar: this._avatar,
    };
  }
}

export default UserInfo;

// Creating the UserInfo Class
// The UserInfo class is responsible for rendering information about the user on the page. This class should:
// Take an object with the selectors of two elements into the constructor: one containing the user's name, and another containing the user's job.
// Store a public method named getUserInfo(), which returns an object with information about the user.
// This method will be handy for cases when it's necessary to display the user data in the open form.
// Store a public method named setUserInfo(), which takes new user data and adds it on the page.
