const validationConfig = {
    formSelector: '.popup__content',// форма
    inputSelector: '.popup__input',// инпут
    submitButtonSelector: '.popup__save',// кнопка
    inactiveButtonClass: 'popup__save_invalid', // невалидная кнопка
    inputErrorClass: 'popup__input_error',//инпут невалидный
    errorClass: 'popup__error'//!а хз
};

const enableValidation =({formSelector, ...rest}) => {
    const forms = Array.from(document.querySelectorAll(formSelector));
    forms.forEach(form => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            })
        setListeners(form, rest)
    })
} 

const setListeners = (formToValidate, {inputSelector, submitButtonSelector, ...rest}) => {
    const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector))
    const formButton = formToValidate.querySelector(submitButtonSelector)
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            checkInputValidity(input, rest) 
            if(hasInvalidInput(formInputs)){
                disableButton(formButton, rest)
            } else
                enableButton(formButton, rest)
        })
    })
}

//////checkInputValidity, showErrorMessage
const checkInputValidity = (input, {inputErrorClass, ...rest}) => {
    const currentInputErrorConteiner = document.querySelector(`#${input.id}-error`);
    if (input.checkValidity()) {
        hideErrorMessage(input, currentInputErrorConteiner, inputErrorClass, rest);
    } else {
        showErrorMessage(input, currentInputErrorConteiner, inputErrorClass, rest);
    }
}

// ошибка ввода
const hideErrorMessage = (input, currentInputErrorConteiner, inputErrorClass, rest) => {
    currentInputErrorConteiner.textContent = ''
    input.classList.remove(inputErrorClass)
}

const showErrorMessage = (input, currentInputErrorConteiner, inputErrorClass, rest) => {
    currentInputErrorConteiner.textContent = input.validationMessage
    input.classList.add(inputErrorClass)
}

////
const hasInvalidInput = (formInputs) => {
    return formInputs.some(item => !item.validity.valid)
}

//активная and неактивная кнопка
const enableButton = (button, {inactiveButtonClass, ...rest}) => {
    button.classList.remove(inactiveButtonClass)
    button.removeAttribute('disabled')
}
const disableButton = (button, {inactiveButtonClass, ...rest}) => {
    button.classList.add(inactiveButtonClass)
    button.setAttribute('disabled', true)
}

enableValidation(validationConfig)