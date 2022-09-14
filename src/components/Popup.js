class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // Open popup; add event listener for _handleEscClose
  open() {
    this._popupElement.classList.add("modal_visible");
    document.addEventListener("keydown", this._handleEscClose);
  }

  //Close popup; remove event listener for _handleEscCLose
  close() {
    this._popupElement.classList.remove("modal_visible");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  // Pressing the Escape key closes popup
  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  //Add event listeners
  setEventListeners() {
    this._popupElement.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("modal__exit") ||
        !e.target.closest(".modal__card")
      )
        this.close();
    });
  }
}

export default Popup;
