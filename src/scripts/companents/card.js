export class Card {
  constructor(card, elementTemplate, handleCardClick) {
      this._card = card; 
      this._link = card.image;
      this._name = card.title;
      this._elementTemplate = elementTemplate;
      this._handleCardClick = handleCardClick;
    }

  _getTemplateClone() {
    const itemTemplate = document.querySelector(".template").content.querySelector('.card').cloneNode(true);
      return itemTemplate
    }
    
    //like
  _putCardLike = () => {
    this._likeElement.classList.toggle('card__like_active');
  }
    //delete card
  _deleteCard = () => {
    this._cloneElement.remove();
    this._cloneElement = null;
  }
  //zoom пере
  _handeleOpenZoomImage = () => {
    this._handleCardClick(this._card)
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