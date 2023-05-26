export class Card {
  constructor(dataCard, templateSelector, handleCardClick) {
    //this._card = card; 
   console.log(dataCard)

      this._link = dataCard.link;///!!!! image
      this._name =dataCard.name;
      this._myId = dataCard.myid;
      this._owerId = dataCard.owner._id;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
      this._cloneElement = this._getTemplateClone();
      this._imageElement = this._cloneElement.querySelector('.card__image');
      this._textElement = this._cloneElement.querySelector('.card__text');
      this._likeElement = this._cloneElement.querySelector('.card__like');
      this._deletaElement = this._cloneElement.querySelector('.card__delete');

    }

  _getTemplateClone() {
    //const itemTemplate = this._templateSelector.content.querySelector('.card').cloneNode(true);
      return document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true)
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
    _changeVisibleFOrIrashButton() {
      this._myId === this._owerId ? this._deletaElement.style.display = 'block' : this._deletaElement.style.display = 'none'
    }

  createCard() {
    // this._cloneElement = this._getTemplateClone();
    // this._imageElement = this._cloneElement.querySelector('.card__image');
    // this._textElement = this._cloneElement.querySelector('.card__text');
    // this._likeElement = this._cloneElement.querySelector('.card__like');
    // this._deletaElement = this._cloneElement.querySelector('.card__delete');
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._textElement.textContent = this._name;
    this._changeVisibleFOrIrashButton()
    this._setEventListener()
    return this._cloneElement
  }

}