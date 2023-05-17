const initialCards = [
    {
      title: 'Вечер',
      image: 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697'
    },
    {
      title: 'Енот',
      image: 'https://images.unsplash.com/photo-1655208479058-4991ca8af84a'
    },
    {
      title: 'Котик',
      image: 'https://img.fonwall.ru/o/53/kot-belyiy-vzglyad-glaza.jpg'
    },
    {
      title: 'Cобачка',
      image: 'https://cdnn1.inosmi.ru/img/24985/10/249851004_0:196:2030:1211_1280x0_80_0_0_87d6869bd94c383de3e0573302893762.jpg.webp'
    },
    {
      title: 'ля-ля-ля',
      image: 'https://icdn.lenta.ru/images/2014/10/22/12/20141022121419489/detail_a210512d2dc372a700ff8ab8676bc4fc.jpg'
    },
    {
      title: 'Собака',
      image: 'https://images.unsplash.com/photo-1610243684348-dc537f6067ca'
    }
  ];

//кнопки
const popupOpenButtomProfile = document.querySelector(".profile__edit");
const popupOpenButtomGalery = document.querySelector(".profile__add");

//формы, валидация
const formProfileElement = document.forms.profile_form;
const formAddElement = document.forms.profile_title;

//const = selector
const popupSelectorProfile = '.popup_profile';
const popupSelectorGalery = '.popup_galery';
const popupSelectorImage = '.popup_zoom-image';
const templateSelector ='.template';
const listSelector = '.cards';


//профиль
const infoConfig= {
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__about'
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
  initialCards, popupOpenButtomProfile, popupOpenButtomGalery, formProfileElement, formAddElement, popupSelectorProfile, popupSelectorGalery,popupSelectorImage,templateSelector,listSelector,infoConfig,validationConfig
}