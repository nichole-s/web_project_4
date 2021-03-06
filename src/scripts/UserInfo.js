class UserInfo {
  constructor(userNameSelector, userJobSelector, avatar) {
    this._profileNameElement = document.querySelector(userNameSelector);
    this._profileJobElement = document.querySelector(userJobSelector);   
    this._avatar = document.querySelector(avatar); 
  }

  getUserInfo() { 
    return this.userInfo = { name:this._profileNameElement.textContent, job:this._profileJobElement.textContent, avatar:this._avatar.src };
  }

setUserInfo({userName, userJob, userAvatar}) {
    this._profileNameElement.textContent = userName;
    this._profileJobElement.textContent = userJob;
    this._avatar.src = userAvatar;
  }
} 

export default UserInfo

// Creating the UserInfo Class
// The UserInfo class is responsible for rendering information about the user on the page. This class should:
// Take an object with the selectors of two elements into the constructor: one containing the user's name, and another containing the user's job.
// Store a public method named getUserInfo(), which returns an object with information about the user. 
// This method will be handy for cases when it's necessary to display the user data in the open form.
// Store a public method named setUserInfo(), which takes new user data and adds it on the page. 