import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    // move line 6 to constructor
    this._inputList = this._popupForm.querySelectorAll(".popup__input");

    const inputVlaues = {};
    this._inputList.forEach((input) => {
      // add a key/value pair to the values object for each input (sprint 4 objects)
      // the key is input.name
      // the value is input.value
      // need to use brackets notation, not dot
    });
    return inputVlaues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputVlaues = this._getInputValues();

      // pass results of _getInputValues to submition handler
      this._handleFormSubmit(evt);
    });
  }
}
export default PopupWithForm;
