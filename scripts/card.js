export class Card {
  constructor(card, selectorTemplate, openZoomPopupImage) {
      this._cardData = card; 
      this._link = card.link;
      this._name = card.name;
      this._selectorTemplate = selectorTemplate;
      this._openZoomPopupImage = openZoomPopupImage;
    }

  _getTemplateClone() {
    const itemTemplate = document.querySelector(".template").content.querySelector('.card').cloneNode(true);
      return itemTemplate
    }

    //like
  _putCardLike(evt) {
    evt.target.classList.toggle('card__like_active');
  }
    //delete card
  _deleteCard(evt) {
    evt.target.closest('.card').remove();
  }
  //zoom
  _handeleOpenZoomImage = () => {
    this._openZoomPopupImage(this._cardData)
    }

  _setEventListener() {
    this._likeElement.addEventListener('click', this._putCardLike);
    this._deletaElement.addEventListener('click', this._deleteCard);
    this._imageElement.addEventListener('click', this._handeleOpenZoomImage)
    }

  createCard() {
    this._cloneElement = this._getTemplateClone();
    this._imageElement = this._cloneElement.querySelector('.card__image');
    this._textElement = this._cloneElement.querySelector('.card__text');
    this._likeElement = this._cloneElement.querySelector('.card__like');
    this._deletaElement = this._cloneElement.querySelector('.card__delete');
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._textElement.textContent = this._name;
    this._setEventListener()
    return this._cloneElement
  }

}