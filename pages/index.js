import { Card } from "../scripts/companents/card.js"
import { FormValidator } from "../scripts/companents/formValidator.js"
import PopupWithImage from "../scripts/companents/popupWithImage.js";
import Section from "../scripts/companents/section.js";
import { UserInfo } from "../scripts/companents/userInfo.js";
import  PopupWithForm  from "../scripts/companents/popupWithForm.js";
import { initialCards, popupOpenButtomProfile, popupOpenButtomGalery, formProfileElement, formAddElement, popupSelectorProfile, popupSelectorGalery,popupSelectorImage,templateSelector,listSelector,infoConfig,validationConfig } from "../scripts/utils/constants.js"

//image 
const popupImage = new PopupWithImage(popupSelectorImage);
popupImage.setEvenListners()

// SECTION (шаблон карточки создание карточки по класс)
const section = new Section({
  items: initialCards,
  renderer: (element) => {
  const card = new Card(element, templateSelector, popupImage.open);
  return card.createCard();
  }
},listSelector)

//создание карточек из масива
section.addCardFromArray()

//popup 
const userInfo = new UserInfo(infoConfig)

// //profile обработка формы
const profilePopup = new PopupWithForm(popupSelectorProfile, (data) => {
  userInfo.setUserInfo(data)
  profilePopup.close();
})

popupOpenButtomProfile.addEventListener('click', () => {
  profilePopup.setIputValue(userInfo.getUserInfo())
  formProfileElementValidator.resetErrorOpenForm()
  profilePopup.open()
});
profilePopup.setEvenListners();

//newcard обработка формы
const popupAddCard = new PopupWithForm(popupSelectorGalery, (data) => {
  section.addItem(data)
  popupAddCard.close();
  formAddElementValidator.resetErrorOpenForm()
})

popupAddCard.setEvenListners();
popupOpenButtomGalery.addEventListener('click', () => popupAddCard.open());

//экземпляры форм для валидности
const formProfileElementValidator = new FormValidator(validationConfig, formProfileElement);
formProfileElementValidator.enableValidation()
const formAddElementValidator = new FormValidator(validationConfig, formAddElement);
formAddElementValidator.enableValidation()