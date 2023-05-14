export  class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
        this._popupCloseButton = this._popup.querySelector('.popup__close')
    }

    //ESC
    _handleCloseEsc = (evt) => {
        if(evt.key === 'Escape') {
            this.close()
          }
    }

    _handleCloseButton = () => {
        this.close()
    }

    _handleClickOnOverlay = (evt) => {
        if (evt.target === evt.currentTarget) { 
            this.close()
        }
    }

    setEvenListners() {
        this._popupCloseButton.addEventListener('click', this._handleCloseButton);
        this._popup.addEventListener('click', this._handleClickOnOverlay)
    }

///кнопки открытия и их обработка
    open(){
        this._popup.classList.add("popup_open");
        document.addEventListener('keydown', this._handleCloseEsc);
    }
    close(){
        this._popup.classList.remove("popup_open");
        document.removeEventListener('keydown', this._handleCloseEsc);
          }

}