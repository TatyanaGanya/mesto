import './index.css'
import { Card } from "../scripts/companents/card.js"
import { FormValidator } from "../scripts/companents/formValidator.js"
import PopupWithImage from "../scripts/companents/popupWithImage.js";
import Section from "../scripts/companents/section.js";
import { UserInfo } from "../scripts/companents/userInfo.js";
import  PopupWithForm  from "../scripts/companents/popupWithForm.js";
import { initialCards, popupOpenButtomProfile, popupOpenButtomGalery, formProfileElement, formAddElement, popupSelectorProfile, popupSelectorGalery,popupSelectorImage,templateSelector,listSelector,infoConfig,validationConfig } from "../scripts/utils/constants.js"
import Api from '../scripts/companents/api.js';
import PopupCardDelete from '../scripts/companents/popupCardDelete.js';


// api pr9
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '69b59d5b-f26f-4db1-9d60-b5f1c83af874',
    'Content-Type': 'application/json'
  }
}); 

//console.log(api)


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
//section.addCardFromArray()

//popup 
const userInfo = new UserInfo(infoConfig)

// profile обработка формы 
const profilePopup = new PopupWithForm(popupSelectorProfile, (data) => {
  api.setUserInfo(data)
  .then(res => {
    userInfo.setUserInfo({
      profile_name: res.name, 
      profile_job: res.about, 
      profile_avatar: res.avatar})
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  })
  .finally();
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
  section.addItemPrepend(data)
  popupAddCard.close();

})

popupAddCard.setEvenListners();
popupOpenButtomGalery.addEventListener('click', () => {
  formAddElementValidator.resetErrorOpenForm()
  popupAddCard.open()
});

//экземпляры форм для валидности
const formProfileElementValidator = new FormValidator(validationConfig, formProfileElement);
formProfileElementValidator.enableValidation()
const formAddElementValidator = new FormValidator(validationConfig, formAddElement);
formAddElementValidator.enableValidation()

//получить масив и получить данные
Promise.all([api.getInfo(), api.getCards()])
    .then(([dataUser, dataCard]) => {
      dataCard.forEach(element => element.myid = dataUser._id);
      userInfo.setUserInfo({
        profile_name: dataUser.name, 
        profile_job: dataUser.about, 
        profile_avatar: dataUser.avatar}
        )
      section.addCardFromArray(dataCard);
    })
    
    .catch((err) => {console.error(err)})
