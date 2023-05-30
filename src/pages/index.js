import './index.css'
import { Card } from "../scripts/companents/card.js"
import { FormValidator } from "../scripts/companents/formValidator.js"
import PopupWithImage from "../scripts/companents/popupWithImage.js";
import Section from "../scripts/companents/section.js";
import { UserInfo } from "../scripts/companents/userInfo.js";
import  PopupWithForm  from "../scripts/companents/popupWithForm.js";
import { popupOpenButtomAvatar, popupOpenButtomProfile, popupOpenButtomGalery, formAvatarElement, formProfileElement, formAddElement,popupSelectorAvatar, popupSelectorProfile,popupSelectorDelete, popupSelectorGalery,popupSelectorImage,templateSelector,listSelector,infoConfig,validationConfig
} from "../scripts/utils/constants.js"
import PopupCardDelete from '../scripts/companents/popupCardDelete.js';
import Api from '../scripts/companents/api.js';




//экземпляры форм для валидности
const formProfileElementValidator = new FormValidator(validationConfig, formProfileElement);
formProfileElementValidator.enableValidation()

const formAddElementValidator = new FormValidator(validationConfig, formAddElement);
formAddElementValidator.enableValidation()

const formAvataElementValidator = new FormValidator(validationConfig, formAvatarElement);
formAvataElementValidator.enableValidation()


// api pr9
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '69b59d5b-f26f-4db1-9d60-b5f1c83af874',
    'Content-Type': 'application/json'
  }
}); 

//popup +
const userInfo = new UserInfo(infoConfig)

//image +
const popupImage = new PopupWithImage(popupSelectorImage);

//delete
const deletePopupCard= new PopupCardDelete(popupSelectorDelete, ({card, cardId}) => {
  api.deleteCard(cardId)
    .then(() =>{
      card.removeCard()
      deletePopupCard.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
   
});



// SECTION (шаблон карточки создание карточки по класс)
//function +
function creatNewCard(element) {
  const card = new Card(element, templateSelector, popupImage.open, deletePopupCard.open, (likeElement, cardId) => {
    if(likeElement.classList.contains('card__like_active')){
      api.deleteLike(cardId)
      .then(res => {
        card.toggleLike(res.likes)
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })

    } else {
      api.addLike(cardId) 
        .then (res => {
          card.toggleLike(res.likes)
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
    }
  });
  return card.createCard();
}

const section = new Section((element) => {
    section.addItemAppend(creatNewCard(element))
},listSelector)


//profile обработка формы +
const profilePopup = new PopupWithForm(popupSelectorProfile, (data) => {
  api.setUserInfo(data)
  .then(res => {
    userInfo.setUserInfo({
      profile_name: res.name, 
      profile_job: res.about, 
      profile_avatar: res.avatar
     })
     profilePopup.close();
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  })
  .finally(() => profilePopup.setupDefaultText())

})


///avatar 
const popupAvatar = new PopupWithForm(popupSelectorAvatar, (data) => {
  api.setUserAvatar(data)
  .then(res => {
    userInfo.setUserInfo({
      profile_name: res.name, 
      profile_job: res.about, 
      profile_avatar: res.avatar
     })
     popupAvatar.close();
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  })
  .finally(() => popupAvatar.setupDefaultText());

})



//newcard обработка формы+
const popupAddCard = new PopupWithForm(popupSelectorGalery, (data) => {
  Promise.all([api.getInfo(), api.addCard(data)])
  .then(([dataUser, dataCard]) => {
    dataCard.myid = dataUser._id;
    section.addItemPrepend(creatNewCard(dataCard))
    popupAddCard.close()
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  })
  .finally(() => popupAddCard.setupDefaultText());
 
});




//открытие аватара
popupOpenButtomAvatar.addEventListener('click', () => {
  formAvataElementValidator.resetErrorOpenForm()
    popupAvatar.open()
  })

popupOpenButtomProfile.addEventListener('click', () => {
  profilePopup.setIputValue(userInfo.getUserInfo())
  formProfileElementValidator.resetErrorOpenForm()
  profilePopup.open()
});

popupOpenButtomGalery.addEventListener('click', () => {
 formAddElementValidator.resetErrorOpenForm()
  popupAddCard.open()
});


//setEvenListners
popupAddCard.setEvenListners();
profilePopup.setEvenListners();
deletePopupCard.setEvenListners();
popupImage.setEvenListners();
popupAvatar.setEvenListners();


//получить масив и получить данные
Promise.all([api.getInfo(), api.getCards()])
    .then(([dataUser, dataCard]) => {
      dataCard.forEach(element => element.myid = dataUser._id);
      userInfo.setUserInfo({
        profile_name: dataUser.name, 
        profile_job: dataUser.about, 
        profile_avatar: dataUser.avatar}
        )
      section.addCardFromArray(dataCard); //массив card
    
    })
    .catch((err) => {console.error(err)})