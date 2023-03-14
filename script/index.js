
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
popupClouseButtomElement.addEventListener('click', closePopup);


// Находим форму в DOM
let formElement = popupElement.querySelector('.popup__content');

let nameInput = popupElement.querySelector('.popup__input_type_name');
let jobInput = popupElement.querySelector('.popup__input_type_job');

let profileName = document.querySelector('.profile__name')
let profileAbout = document.querySelector('.profile__about')



//innerText
nameInput.value=profileName.innerText;
jobInput.value=profileAbout.innerText;

function handleFormSubmit (evt) {


    evt.preventDefault();

    nameInput.value = profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopup ();
    
};

// Прикрепляем обработчик к форме:

formElement.addEventListener('submit', handleFormSubmit); 
