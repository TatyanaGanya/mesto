export class FormValidator {
    constructor(config, form) {
        this._formSelector = config.formSelector; // форма
        this._inputSelector = config.inputSelector; // инпут
        this._submitButtonSelector = config.submitButtonSelector;// кнопка
        this._inactiveButtonClass = config.inactiveButtonClass; // невалидная кнопка
        this._inputErrorClass = config.inputErrorClass;//инпут невалидный
        this._form = form; 
        this._button = form.querySelector(this._submitButtonSelector);
        this._inputList = form.querySelectorAll(this._inputSelector);
    }

    //сообщение и красная линия
    _hideErrorMessage(input, currentInputErrorConteiner){
        currentInputErrorConteiner.textContent = ''
        input.classList.remove(this._inputErrorClass)
    };

    _showErrorMessage(input, currentInputErrorConteiner){
        currentInputErrorConteiner.textContent = input.validationMessage
        input.classList.add(this._inputErrorClass)
    };

    _checkInputValidity(input) {
        const currentInputErrorConteiner = document.querySelector(`#${input.id}-error`);
            if (input.checkValidity()) {
                this._hideErrorMessage(input, currentInputErrorConteiner);
            } else {
                this._showErrorMessage(input, currentInputErrorConteiner);
            }
    }

    //кнопка
    _enableButton () {
        this._button.classList.remove(this._inactiveButtonClass)
        this._button.removeAttribute('disabled')
    }
    _disableButton () {
        this._button.classList.add(this._inactiveButtonClass)
        this._button.setAttribute('disabled', true)
    }

    _hasInvalidInput(){
        return Array.from( this._inputList).some(input => !input.validity.valid)
    }

    _toggleButton() {
        this._hasInvalidInput() 
        if(this._hasInvalidInput()){
            this._disableButton()
        } else
            this._enableButton()
    }

    _setEventListner() {
        this._inputList.forEach(input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input)
                this._toggleButton()
            })
        })
    }
    
    //валидность формы
    enableValidation() {
        this._setEventListner();
    }

    //проверка формы наошибки
    resetErrorOpenForm() {
        this._inputList.forEach(input =>{
            const errorTextElement = this._form.querySelector(`#${input.id}-error`)
            if (!input.validity.valid) {
                this._hideErrorMessage(errorTextElement, input);
            }
        })
        this._disableButton()
    }
  }
