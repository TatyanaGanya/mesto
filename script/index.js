
//элементы  dom
const popupElement = document.querySelector(".popup");
const popupClouseButtomElement = popupElement.querySelector(".popup__close");
const popupOpenButtomElement = document.querySelector(".profile__edit");


const openPopup = function () {
    popupElement.classList.add("popup_open");
};

const closePopup = function () {
    popupElement.classList.remove("popup_open");
};

// open and close

popupOpenButtomElement.addEventListener('click', openPopup);

popupClouseButtomElement.addEventListener("click", closePopup)

// close event
const closePopupByClickOnOverlay = function (event) 
{
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopup();
};

popupElement.addEventListener("click",closePopupByClickOnOverlay);


// Находим форму в DOM
let formElement = popupElement.querySelector(".popup__content");

let nameInput = popupElement.querySelector('.popup__input_type_name');
let jobInput = popupElement.querySelector('.popup__input_type_job');

function handleFormSubmit (evt) {
    evt.preventDefault();

    nameInput.value;
    jobInput.value;

    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector('.profile__about').textContent = jobInput.value;

handleFormSubmit ();

};
// Прикрепляем обработчик к форме:

formElement.addEventListener('submit', handleFormSubmit); 

const popupSaveButtomElement = popupElement.querySelector(".popup__save");

popupSaveButtomElement.addEventListener("click", closePopup);