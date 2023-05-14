import { Popup } from "./popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFunction) {
        super(popupSelector);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector('.popup__content')
        this._inputList = this._form.querySelectorAll('.popup__input')
    }
//
    getIputValue(){
        this._values = {};
        this._inputList.forEach(input => {
            this._values[input.name] = input.value
        })
        return this._values
    }

    setIputValue(data){
        this._inputList.forEach(input => {
            input.value = data[input.name];
        })
     }

    setEvenListners(){
        super.setEvenListners();
        this._form.addEventListener('submit', this._submitFunction)
    }

    close(){
        super.close();
        this._form.reset();
    }

}