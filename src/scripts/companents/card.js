export class Card {
  constructor(dataCard, templateSelector, handleCardClick, deletePopupCard, changeLike) {
      this._card = dataCard; 
      this._link = dataCard.link;///!!!! image
      this._name = dataCard.name;
      this._myId = dataCard.myid;
      this._ownerId = dataCard.owner._id;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
      this._deletePopupCard = deletePopupCard;

      this._likes = dataCard.likes;
      this._lengthLike = dataCard.likes.length;
      this._cardId = dataCard._id;
      this._changeLike = changeLike;
      this._cloneElement = this._getTemplateClone();
      this._imageElement = this._cloneElement.querySelector('.card__image');
      this._textElement = this._cloneElement.querySelector('.card__text');
      this._likeElement = this._cloneElement.querySelector('.card__like');
      this._deletaElement = this._cloneElement.querySelector('.card__delete');
      this._counter = this._cloneElement.querySelector('.card__count')
    }

  _getTemplateClone() {
      return document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true)
  }
  //delete card
  _deleteCard = () => {
    this._deletePopupCard({card: this, cardId: this._cardId})
  }
 //zoom 
  _handeleOpenZoomImage = () => {
    this._handleCardClick(this._card)
  }


  //удаление и добавление мусорки
  _changeVisibleFOrIrashButton() {
    if (this._myId === this._ownerId) {
      this._deletaElement.style.display = 'block'
   } else {
    this._deletaElement.style.display = 'none'
    }
  }


// //like
    _putCardLike = () => {
     this._changeLike(this._likeElement, this._cardId);
      //this._likeElement.classList.toggle('card__like_active');
    }

    //проверить свой лайк
  _checklike() {
    this._likes.forEach(element => {
      if(element._id === this._myId){
        this._likeElement.classList.add('card__like_active')
        return
      }
    })
    this._counter.textContent = this._lengthLike;
  }

  toggleLike(likes) {
    this._likeElement.classList.toggle('card__like_active');
    this._counter.textContent = likes.length
  }

  _setEventListener() {
    this._likeElement.addEventListener('click', this._putCardLike);
    this._deletaElement.addEventListener('click', this._deleteCard);
    this._imageElement.addEventListener('click', this._handeleOpenZoomImage)
    }

   removeCard() {
    this._cloneElement.remove();
    this._cloneElement = null;
   }

  createCard() {
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._textElement.textContent = this._name;
    this._checklike();
    this._changeVisibleFOrIrashButton();
    this._setEventListener();
    return this._cloneElement;
  }

}