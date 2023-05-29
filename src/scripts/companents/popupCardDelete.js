import { Popup } from "./popup.js";

export default class PopupCardDelete extends Popup {
    constructor(popupSelector, submitFunction) {
        super(popupSelector);
        this._submitFunction = submitFunction;
    }

    setEvenListners(){
        super.setEvenListners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFunction( this._element)
        })
    }

    open = (element) => {
        super.open();
        console.log(element)
        this._element = element;

    }
}