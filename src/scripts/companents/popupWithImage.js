import {Popup} from "./popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__image')
        this._popupDescription = this._popup.querySelector('.popup__description')
    }

    open = (card) => {
        this._popupImage.src = card.link;
        this._popupImage.alt = card.name;
        this._popupDescription.textContent= card.name;
        super.open()
    }
}