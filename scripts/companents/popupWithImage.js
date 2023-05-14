import {Popup} from "./popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__image')
        this._popupDescription = this._popup.querySelector('.popup__description')
    }

    open = (card) => {
        console.log(card)
        this._popupImage.src = card.image;
        this._popupImage.alt = card.title;
        this._popupDescription.textContent= card.title;
        super.open()
    }

}