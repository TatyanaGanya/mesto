import initialCards from "./scripts/utils/constants.js"
import {Card} from "./scripts/companents/card.js"
import { FormValidator } from "./scripts/companents/formValidator.js"
import {Popup} from "./scripts/companents/popup.js"

//элементы Профиль!
const popupProfile = document.querySelector(".popup_profile");
const popupOpenButtomProfile = document.querySelector(".profile__edit");
const formProfile = popupProfile.querySelector('.popup__content');
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about')
//элементы Галерея!
const popupGalery = document.querySelector(".popup_galery");
const popupOpenButtomGalery = document.querySelector(".profile__add");
const formCard = popupGalery.querySelector('.popup__content');
const titleInput = popupGalery.querySelector('.popup__input_type_title');
const imageInput = popupGalery.querySelector('.popup__input_type_image');
//элементы увеличить картинку!
const popupImage = document.querySelector('.popup_zoom-image');
const popupZoomImage = popupImage.querySelector('.popup__image');
const popupZoomDescription = popupImage.querySelector('.popup__description');
// //Template
const elementTemplate = document.querySelector(".template");
const list = document.querySelector(".cards");
// общие кнопки
const closeButtons = document.querySelectorAll('.popup__close');
const elementPopup = document.querySelectorAll('.popup')

//формы, валидация
const formProfileElement = document.forms.profile_form;
const formAddElement = document.forms.profile_title;

//const = selector
const popupSelectorProfile = '.popup_profile';

//const => index
const validationConfig = {
    formSelector: '.popup__content',// форма-
    inputSelector: '.popup__input',// инпут+
    submitButtonSelector: '.popup__save',// кнопка+
    inactiveButtonClass: 'popup__save_invalid', // невалидная кнопка disableButtonClass+
    inputErrorClass: 'popup__input_error',//инпут невалидный+
    errorClass: 'popup__error'//!а хз 
  };


const popupProfileN = new Popup(popupSelectorProfile)
console.log(popupProfileN)

// ///кнопки открытия и их обработка
// const openPopup = function (popup) {
//   popup.classList.add("popup_open");
//   document.addEventListener('keydown', closePopupOnEsc);
// };

//const openPopupProfile
popupOpenButtomProfile.addEventListener('click', function () {
  nameInput.value=profileName.innerText;
  jobInput.value=profileAbout.innerText;
  formProfileElementValidator.resetErrorOpenForm()
  //openPopup(popupProfile) 
  popupProfileN.open()
});
popupOpenButtomGalery.addEventListener('click', () => openPopup(popupGalery));

// // закрытие Popup!
// const closePopup = function (popup) {
//   popup.classList.remove("popup_open");
//   document.removeEventListener('keydown', closePopupOnEsc);
// };

// closeButtons.forEach((button) => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));
// });

// //ESC !
// function closePopupOnEsc(evt) {
//   if(evt.key === 'Escape') {
//     const popup = document.querySelector('.popup_open')
//     closePopup(popup)
//   }
// }



//ClickOnOverlay
const closePopupByClickOnOverlay = evt => {
  if (evt.target === evt.currentTarget) { 
    closePopup(evt.currentTarget)
  }
}
elementPopup.forEach(element => element.addEventListener('click', closePopupByClickOnOverlay));

// profile
function submitEditProfileForm (evt) { 
  evt.preventDefault(); 
  profileName.textContent = nameInput.value; 
  profileAbout.textContent = jobInput.value; 

  closePopup(popupProfile);
}; 
formProfile.addEventListener('submit', submitEditProfileForm); 

// увеличение картинки
function openZoomPopupImage (card) {
  popupZoomImage.alt = card.name;
  popupZoomImage.src = card.link;
  popupZoomDescription.textContent = card.name;
  openPopup(popupImage);
};

//шаблон карточки создание карточки по класс
function createCardGalery(element) {
  const card = new Card(element, elementTemplate, openZoomPopupImage);
  const cardElement = card.createCard()
  return cardElement 
}

//список карточек
function addCardPrepend(container, card) {
  container.prepend(card);
}
function addCardAppend(container, card) {
  container.append(card);
}

// масив карт
initialCards.forEach(element => {
  addCardAppend(list, createCardGalery(element))
})

//new card
function handleFormSubmitGalery(evt) {
  evt.preventDefault();
  const card = {name: titleInput.value, link: imageInput.value};
  formAddElementValidator.resetErrorOpenForm()
  //disableButton(addButton, validationConfig)
  addCardPrepend(list, createCardGalery(card))
  closePopup(popupGalery);
  evt.target.reset();
}
formCard.addEventListener('submit', handleFormSubmitGalery);

//экземпляры форм для валидности
const formProfileElementValidator = new FormValidator(validationConfig, formProfileElement);
formProfileElementValidator.enableValidation()

const formAddElementValidator = new FormValidator(validationConfig, formAddElement);
formAddElementValidator.enableValidation()

