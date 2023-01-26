const card = document.querySelector('#tmp-card');
const template = document.querySelector('#card-template').content;

//console.log({ card });
//console.log({ template });



class Card {
  constructor(dataCat, selectorTemplate) {
    this._data = dataCat;
    this._selectorTemplate = selectorTemplate;
  }

  _getTemplate() {  // находим шаблон карточки кота получаем его в виде DOM узла
    const elem = document.querySelector(this._selectorTemplate).content.querySelector('.card');
    // документ фрагмент -  легковесная версия ноды типа элемент. 
    return elem;
  }
  getElement() {
    this.element = this._getTemplate().cloneNode(true); // ловим шаблон
    const cardTitle = this.element.querySelector('.card__name'); // название карточки имя кота
    const cardImage = this.element.querySelector('.card__image'); // фото кота ссылка на файл
    const cardLike = this.element.querySelector('.card__like'); // лайк на карточке кота

    // снимаем лайк, если favorit: false

    if (!this._data.favorite) {
      cardLike.remove();
    }

    cardTitle.textContent = this._data.name ?? 'Barsik'; // нулевое слияние, если в объекте отсутствует имя кота
    cardImage.src = this._data.image;
    return this.element;
  }
}

// const card = new Card(cats[0], '#card-template');

// card.getElement();

// console.log({ card });


// {
//   "name": "Базиль",
//   "image": "https://www.friendforpet.ru/api/sites/default/files/2022-01/064AEBCB-45EC-4CE7-AB13-C65F10F00B7B.jpeg",
//   "age": 2,
//   "rate": 10,
//   "favorite": false,
//   "description": "Внимательный, активный и ласковый. Любит играть, катать мяч, и мурчать на пледе рядом с людьми! Прилично воспитан, приучен к лотку. Вакцинирован, имеет ветеринарный паспорт.",
//   "id": 2
// },
