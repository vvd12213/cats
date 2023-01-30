const cardsContainer = document.querySelector('.cards'); // карточка кота файл card.js
const btnOpenPopupForm = document.querySelector('#add'); // кнопка добавить кота "+" для открытия попандер формы

const formAddCat = document.querySelector('#popup-form-cat');
const popupAddCat = new Popup('popup-add-cats');
popupAddCat.setEventListener();
//console.log({ popupAddCat });



//вставка данных из формы, созданной по шаблону
function handleFormAddCat(e) {
  e.preventDefault();
 // console.log(formAddCat.elements);
  const elementsFormCat = [...formAddCat.elements];
  console.log(elementsFormCat);
  const dataFromForm = serializeForm(elementsFormCat);
  api.addNewCat(dataFromForm);
  createCat(dataFromForm);
  popupAddCat.close();
}

// Импортируем котов из массива
/*  cats.forEach((cat) => {
  const cardInstance = new Card(cat, '#card-template'); // объявляем карточку кота
  const newCardElement = cardInstance.getElement(); // получаем элементы карточки кота  через фуецию из файла card.js
  cardsContainer.append(newCardElement); //вставляем карточку кота на страницу
}); */


btnOpenPopupForm.addEventListener('click', () => popupAddCat.open()); // событие открытие попап по кнопке +
formAddCat.addEventListener('submit', handleFormAddCat); // закрытие попап по кнопке сохранить

//Получение данных котов с сервера из промиса и создаем карточки котов
api.getAllCats().then((data) => 
data.forEach((cat) => {
  createCat(cat);
})
);