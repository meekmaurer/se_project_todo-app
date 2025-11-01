class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  _handleEscapeClose(evt) {
    console.log("any key pressed");
    if (evt.key === "Escape") {
      console.log("escape key pressed");
      console.log(`this is:`, this);
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", (evt) => this._handleEscapeClose(evt));
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keyup", (evt) =>
      this._handleEscapeClose(evt)
    );
    console.log("close method");
  }

  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });

    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
export default Popup;
