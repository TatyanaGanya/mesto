//элементы Профиль
const popupProfile = document.querySelector(".popup__profile");
const popupClouseButtomProfile = popupProfile.querySelector(".popup__close");
const popupOpenButtomProfile = document.querySelector(".profile__edit");

// Находим форму в DOM
let formProfile = popupProfile.querySelector('.popup__content');
let nameInput = popupProfile.querySelector('.popup__input_type_name');
let jobInput = popupProfile.querySelector('.popup__input_type_job');

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

// open and close
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


//открытие и закрытие Popap Галерея 5ПЗ

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Енот',
      link: 'https://images.unsplash.com/photo-1655208479058-4991ca8af84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://images.unsplash.com/photo-1606949571055-91663aef19fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://images.unsplash.com/photo-1612899028172-8e4438bf20b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  const popupGalery = document.querySelector(".popup__galery");
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
  const itemTemplate = document.querySelector(".item_template").content;
  const list = document.querySelector(".cards");
let FormCard = popupGalery.querySelector('.popup__content');
  let titleInput = popupGalery.querySelector('.popup__input_type_title');
  let imageInput = popupGalery.querySelector('.popup__input_type_image');

  /// объеденяем функции
initialCards.forEach(rendItem)

function rendItem (item) {
    const htmlElement = itemTemplate.cloneNode(true);
    htmlElement.querySelector('.card__image').alt = item.name; 
    htmlElement.querySelector('.card__text').textContent = item.name;
    htmlElement.querySelector('.card__image').src = item.link;

   //setEventListeners(initialCards);
    list.append(htmlElement); 

     return htmlElement;
}


  function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopupProfile();
};

// Прикрепляем обработчик к форме:
formProfile.addEventListener('submit', handleFormSubmit); 





///
const cardDeleteImage = document.querySelector('.card__delete')


const addButton = document.querySelector('.input__btn_action_add');
 

// 
function addCard(imageValue, titleValue) {
    // itemTemplate = const songTemplate = document.querySelector('#song-template').content;
    const cardElementGalery = itemTemplate.querySelector('.card').cloneNode(true);
  
    cardElementGalery.querySelector('.card__image').src = imageValue;
    cardElementGalery.querySelector('.card__text').textContent = titleValue;
    cardElementGalery.querySelector('.card__image').alt = titleValue;
    
    list.prepend(cardElementGalery);
  }

  function handleFormSubmitGalery(evt) {
    evt.preventDefault();
    let image = imageInput;
    let title = titleInput;
  
   // popupSaveButtomGalery = 
    addCard(image.value, title.value);
    closePopupGalery();
    image.value = ''
    title.value = ''
  }
  addButton.addEventListener('click', handleFormSubmitGalery); 

  const likeButton = list.querySelector('.card__like');
  //lj,fdbnm d aeyrwb. 
  likeButton.addEventListener('click', function (evt) {
      evt.target.classList.toggle('card__like_active')
    });
  //
 const cardDeleteGalery = document.querySelector('.card__delete');

  cardDeleteGalery.addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });
  