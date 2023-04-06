//карточки
const initialCards = [
  {
    name: 'Вечер',
    link: 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697'
  },
  {
    name: 'Енот',
    link: 'https://images.unsplash.com/photo-1655208479058-4991ca8af84a'
  },
  {
    name: 'Котик',
    link: 'https://img.fonwall.ru/o/53/kot-belyiy-vzglyad-glaza.jpg'
  },
  {
    name: 'Cобачка',
    link: 'https://cdnn1.inosmi.ru/img/24985/10/249851004_0:196:2030:1211_1280x0_80_0_0_87d6869bd94c383de3e0573302893762.jpg.webp'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Собака',
    link: 'https://images.unsplash.com/photo-1610243684348-dc537f6067ca'
  }
];

//элементы Профиль!
const popupProfile = document.querySelector(".popup_profile");
const popupOpenButtomProfile = document.querySelector(".profile__edit");

//const formProfileSave = popupProfile.querySelector('.popup__save');
const formProfile = popupProfile.querySelector('.popup__content');
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_job');

const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about')

//элементы Галерея!
const popupGalery = document.querySelector(".popup_galery");

const popupOpenButtomGalery = document.querySelector(".profile__add");
//const popupClouseButtomGalery = popupGalery.querySelector(".popup__close");
//const addButton = popupGalery.querySelector('.popup__save');

const formCard = popupGalery.querySelector('.popup__content');
const titleInput = popupGalery.querySelector('.popup__input_type_title');
const imageInput = popupGalery.querySelector('.popup__input_type_image');

//элементы увеличить картинку!
const popupImage = document.querySelector('.popup_zoom-image');
const popupZoomImage = popupImage.querySelector('.popup__image');
const popupZoomDescription = popupImage.querySelector('.popup__description');

//Template
const itemTemplate = document.querySelector(".template").content;
const list = document.querySelector(".cards");
const likeButton = list.querySelector('.card__like');
const cardDeleteGalery = list.querySelector('.card__delete');

// общие кнопки
const closeButtons = document.querySelectorAll('.popup__close');
const elementPopup = document.querySelectorAll('.popup')


///кнопки и их обработка
const openPopup = function (popup) {
  popup.classList.add("popup_open");
  document.addEventListener('keydown', closePopupOnEsc);
  checkInputValidity(input)
};

//const openPopupProfile = 
popupOpenButtomProfile.addEventListener('click', function () {
  nameInput.value=profileName.innerText;
  jobInput.value=profileAbout.innerText;
  
  openPopup(popupProfile) 
});

popupOpenButtomGalery.addEventListener('click', () => openPopup(popupGalery));


// закрытие Popup!
const closePopup = function (popup) {
  popup.classList.remove("popup_open");
 document.removeEventListener('keydown', closePopupOnEsc);
};

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//ESC !
function closePopupOnEsc(evt) {
  if(evt.key === 'Escape') {
  const elementPopap = document.querySelector('.popup_open')
    closePopup(elementPopap)
  }
}
//ClickOnOverlay
const closePopupByClickOnOverlay = evt => {
  if (evt.target === evt.currentTarget) { 
    closePopup(evt.currentTarget)
  }
}
elementPopup.forEach(element => element.addEventListener('click', closePopupByClickOnOverlay));

// profile
function handleFormSubmit (evt) { 
  evt.preventDefault(); 
profileName.textContent = nameInput.value; 
profileAbout.textContent = jobInput.value; 
closePopup(popupProfile);
}; 

formProfile.addEventListener('submit', handleFormSubmit); 

//like
function putCardLike (evt) {
  evt.target.classList.toggle('card__like_active')
}

//delete card
function deleteCard (evt) {
evt.target.closest('.card').remove();
}

// zoom
const openZoomPopupImage = function (name, link) {
  popupZoomImage.alt = name;
  popupZoomImage.src = link;
  popupZoomDescription.textContent = name;
  openPopup(popupImage);
};
function setEventListeners (htmlElement) {
  htmlElement.querySelector('.card__like').addEventListener('click', putCardLike);
  htmlElement.querySelector('.card__delete').addEventListener('click', deleteCard);
}

// шаблон

function createCard ({name, link}) {
  const htmlElement = itemTemplate.cloneNode(true);
  htmlElement.querySelector('.card__image').alt = name; 
  htmlElement.querySelector('.card__image').src = link;
  htmlElement.querySelector('.card__text').textContent = name;
  htmlElement.querySelector('.card__image').addEventListener('click', () => openZoomPopupImage(name,link));

  setEventListeners(htmlElement);
  return htmlElement;
}
// масив 
initialCards.forEach(function (name, link) {
  list.append(createCard(name, link)); 
})
//newCard
function handleFormSubmitGalery(evt) {
  evt.preventDefault();

  list.prepend(createCard({name: titleInput.value, link: imageInput.value}));
  closePopup(popupGalery);
  evt.target.reset();
}

formCard.addEventListener('submit', handleFormSubmitGalery);

