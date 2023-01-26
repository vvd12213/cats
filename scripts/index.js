const cardsContainer = document.querySelector('.cards'); // карточка кота файл card.js
const btnOpenPopupForm = document.querySelector('#add'); // кнопка добавить кота "+" для открытия попандер формы

const formAddCat = document.querySelector('#popup-form-cat');
const popupAddCat = new Popup('popup-add-cats');
//console.log({ popupAddCat });


// Импортируем котов из массива
cats.forEach((cat) => {
  const cardInstance = new Card(cat, '#card-template'); // объявляем карточку кота
  const newCardElement = cardInstance.getElement(); // получаем элементы карточки кота  через фуецию из файла card.js
  cardsContainer.append(newCardElement); //вставляем карточку кота на страницу
});


btnOpenPopupForm.addEventListener('click', () => popupAddCat.open()); // событие открытие попап по кнопке +
formAddCat.addEventListener('submit', () => popupAddCat.close()); // закрытие попап по кнопке сохранить
