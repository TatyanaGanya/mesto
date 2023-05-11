export  class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
        this._popupCloseButton = this._popup.querySelector('popup__close')
    }

    //ESC
    _handeleCloseEsc = (evt) => {
        if(evt.key === 'Escape') {
            this.close()
          }
    }

///кнопки открытия и их обработка
    open(){
        this._popup.classList.add("popup_open");
        document.addEventListener('keydown', this._handeleCloseEsc);
    }
    close(){
        this._popup.classList.remove("popup_open");
        document.removeEventListener('keydown', this._handeleCloseEsc);
          }

}