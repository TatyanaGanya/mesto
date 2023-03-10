
//элементы  dom
const popupElement = document.querySelector(".popup");
const popupClouseButtomElement = popupElement.querySelector(".popup__close");
const popupOpenButtomElement = document.querySelector(".profile__edit");


const openPopup = function () {
    popupElement.classList.add("popup_open");
};

const closePopup = function () {
    popupElement.classList.remove("popup_open");
};

// open and close

popupOpenButtomElement.addEventListener('click', openPopup);
popupClouseButtomElement.addEventListener("click", closePopup)


// Находим форму в DOM
let formElement = // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = // Воспользуйтесь инструментом .querySelector()
let jobInput = // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);