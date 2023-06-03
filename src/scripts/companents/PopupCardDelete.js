import { Popup } from "./Popup.js";

export default class PopupCardDelete extends Popup {
    constructor(popupSelector, submitFunction) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__content');
        this._submitFunction = submitFunction;
    }

    setEvenListners(){
        super.setEvenListners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFunction({card: this._element, cardId: this._cardId});
        })
    }

    open = ({card, cardId}) => {
        super.open();
        this._element = card;
        this._cardId = cardId;
    }
}