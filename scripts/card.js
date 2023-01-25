const card = document.querySelector('#tmp-card');
const template = document.querySelector('#card-template').content;

//console.log({ card });
//console.log({ template });



class Card {
  constructor(dataCat, selectorTemplate) {
    this._data = dataCat;
    this._selectorTemplate = selectorTemplate;
  }

  _getTemplate() {  // получаем шаблон в виде DOM узла
    return document.querySelector(this._selectorTemplate).content.querySelector('.card');
    // документ фрагмент -  это легковесная версия ноды типа элемент. 
  }
  getElement() {
    this.element = this._getTemplate().cloneNode(true);
    const cardTitle = this.element.querySelector('.card__name');
    const cardImage = this.element.querySelector('.card__image');
    const cardLike = this.element.querySelector('.card__like');

    if (!this._data.favorite) {
      cardLike.remove();
    }

    cardTitle.textContent = this._data.name ?? 'Barsik';
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
