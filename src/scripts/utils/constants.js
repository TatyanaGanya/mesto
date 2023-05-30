//кнопки
const popupOpenButtomAvatar = document.querySelector(".profile__change");
const popupOpenButtomProfile = document.querySelector(".profile__edit");
const popupOpenButtomGalery = document.querySelector(".profile__add");

//формы, валидация
const formAvatarElement = document.forms.profile_avatar;
const formProfileElement = document.forms.profile_form;
const formAddElement = document.forms.profile_title;

//const = selector
const popupSelectorAvatar = '.popup_avatar';
const popupSelectorDelete = '.popup_delete';
const popupSelectorProfile = '.popup_profile';
const popupSelectorGalery = '.popup_galery';
const popupSelectorImage = '.popup_zoom-image';
const templateSelector ='.template';
const listSelector = '.cards';
//профиль
const infoConfig= {
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__about',
  profileAvatarSelector: '.profile__avatar'
}

//const => index 
const validationConfig = {
    formSelector: '.popup__content',// форма-
    inputSelector: '.popup__input',// инпут+
    submitButtonSelector: '.popup__save',// кнопка+
    inactiveButtonClass: 'popup__save_invalid', // невалидная кнопка 
    inputErrorClass: 'popup__input_error',//инпут невалидный+
    errorClass: 'popup__error'//!а хз 
  };

export {
  popupOpenButtomAvatar, popupOpenButtomProfile, popupOpenButtomGalery, formAvatarElement, formProfileElement, formAddElement,popupSelectorAvatar, popupSelectorProfile,popupSelectorDelete, popupSelectorGalery,popupSelectorImage,templateSelector,listSelector,infoConfig,validationConfig
}