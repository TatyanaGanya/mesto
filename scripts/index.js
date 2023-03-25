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
    name: 'Камушки',
    link: 'https://pachca-prod-uploads.s3.storage.selcloud.ru/attaches/files/84316/a3de8869-f647-4ff3-bd72-bc02f27ea261/пинаю%20камушек.jpg?response-cache-control=max-age%3D3600%3B&response-content-disposition=attachment&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=142155_staply%2F20230324%2Fru-1a%2Fs3%2Faws4_request&X-Amz-Date=20230324T080602Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=152026d59083c65bd007fa67a982a22ca77e88a194d2d64dc2bc2ef167b1e07e'
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

///кнопки и их обработка
const openPopup = function (popup) {
  popup.classList.add("popup_open");
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
};

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

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
  popupImage.classList.add("popup_open");
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

  list.prepend(createCard({name: imageInput.value, link: titleInput.value}));
  closePopup(popupGalery);

  evt.target.reset();
}

formCard.addEventListener('submit', handleFormSubmitGalery); 