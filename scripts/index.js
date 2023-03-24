//элементы Профиль!
const popupProfile = document.querySelector(".popup_profile");
const popupClouseButtomProfile = popupProfile.querySelector(".popup__close");
const popupOpenButtomProfile = document.querySelector(".profile__edit");
let formProfile = popupProfile.querySelector('.popup__content');
let nameInput = popupProfile.querySelector('.popup__input_type_name');
let jobInput = popupProfile.querySelector('.popup__input_type_job');

///клик по кнопке
const formProfileSave = popupProfile.querySelector('.popup__save');

let profileName = document.querySelector('.profile__name')
let profileAbout = document.querySelector('.profile__about')

const openPopupProfile = function () {
    popupProfile.classList.add("popup_open");
    nameInput.value=profileName.innerText;
    jobInput.value=profileAbout.innerText;
};

const closePopupProfile = function () {
    popupProfile.classList.remove("popup_open");
};

//open and close
popupOpenButtomProfile.addEventListener('click', openPopupProfile);
popupClouseButtomProfile.addEventListener('click', closePopupProfile);


function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopupProfile();
};

// Прикрепляем обработчик к форме:
formProfile.addEventListener('submit', handleFormSubmit); 

// ПЗ 5
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Енот',
      link: 'https://images.unsplash.com/photo-1655208479058-4991ca8af84a'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://images.unsplash.com/photo-1606949571055-91663aef19fc'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://images.unsplash.com/photo-1612899028172-8e4438bf20b8'
    }
  ];
  const popupGalery = document.querySelector(".popup_galery");
  const popupClouseButtomGalery = popupGalery.querySelector(".popup__close");
  const popupOpenButtomGalery = document.querySelector(".profile__add");
  
  // open and close
  const openPopupGalery = function () {
      popupGalery.classList.add("popup_open");
  };

  const closePopupGalery = function () {
      popupGalery.classList.remove("popup_open");
  }; 

popupOpenButtomGalery.addEventListener('click', openPopupGalery);
popupClouseButtomGalery.addEventListener('click', closePopupGalery);  


  //часть 3 
  const itemTemplate = document.querySelector(".template").content;
  const Template = document.querySelector(".template");

  const list = document.querySelector(".cards");

  const likeButton = list.querySelector('.card__like');
  const cardDeleteGalery = document.querySelector('.card__delete');

  let FormCard = popupGalery.querySelector('.popup__content');
  let titleInput = popupGalery.querySelector('.popup__input_type_title');
  let imageInput = popupGalery.querySelector('.popup__input_type_image');
  const addButton = popupGalery.querySelector('.popup__save');

//like
  function handleCardLike (evt) {
    evt.target.classList.toggle('card__like_active')
}

//delete card
function handleCardDelete (evt) {
  evt.target.closest('.card').remove();
}

// открытие картинки в модельном окне
const popupImage = document.querySelector('.popup_zoom-image');
const popupClouseButtomImage = popupImage.querySelector(".popup__close");

const closeZoomPopupImage = function () {
  popupImage.classList.remove("popup_open");
};
popupClouseButtomImage.addEventListener('click', closeZoomPopupImage);


function setEventListeners (htmlElement) {
htmlElement.querySelector('.card__like').addEventListener('click', handleCardLike);
htmlElement.querySelector('.card__delete').addEventListener('click', handleCardDelete);

}
  /// объеденяем функции !?

  function handleFormSubmitGalery(evt) {
    evt.preventDefault();
    let image = imageInput;
    let title = titleInput;
  
    addCard(image.value, title.value);
    closePopupGalery();
    image.value = ''
    title.value = ''
  }
  addButton.addEventListener('click', handleFormSubmitGalery); 

initialCards.forEach(rendItem)

function rendItem (item) {
    const htmlElement = itemTemplate.cloneNode(true);
    htmlElement.querySelector('.card__image').alt = item.name; 
    htmlElement.querySelector('.card__image').src = item.link;
    htmlElement.querySelector('.card__text').textContent = item.name;
    


     const openZoomPopupImage = function () {

      popupImage.querySelector('.popup__description').alt = item.name;
      popupImage.querySelector('.popup__image').src = item.link;
      popupImage.querySelector('.popup__description').textContent = item.name;
      popupImage.classList.add("popup_open");
    };
    //open and close
    htmlElement.querySelector('.card__image').addEventListener('click', openZoomPopupImage);


///
    setEventListeners(htmlElement);
    list.append(htmlElement); 
}

function addCard(imageValue, titleValue) {
  const cardElementGalery = itemTemplate.cloneNode(true);
     cardElementGalery.querySelector('.card__image').alt = titleValue;
     cardElementGalery.querySelector('.card__image').src = imageValue;
     cardElementGalery.querySelector('.card__text').textContent = titleValue;
     // try agein 

     const openZoomPopupImage = function () {

      popupImage.querySelector('.popup__description').alt = titleValue;
      popupImage.querySelector('.popup__image').src = imageValue;
      popupImage.querySelector('.popup__description').textContent = titleValue;
      popupImage.classList.add("popup_open");
    };
//open and close
    cardElementGalery.querySelector('.card__image').addEventListener('click', openZoomPopupImage);

     setEventListeners(cardElementGalery);
     list.prepend(cardElementGalery);
     return cardElementGalery;
   }



