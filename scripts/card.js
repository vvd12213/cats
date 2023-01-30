//const card = document.querySelector('#tmp-card');
//const template = document.querySelector('#card-template').content;

//console.log({ card });
//console.log({ template });



class Card {
  constructor(dataCat, selectorTemplate) {
   // console.log(dataCat);
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
    const cardDelete = this.element.querySelector('.card__delete'); // удаление карточки кота
    //cardDelete.classList.add(`${this._data.id}`);

    if (!this._data.favorite) {
      cardLike.remove();
    }

    cardTitle.textContent = this._data.name ?? 'Barsik';
    cardImage.src =
      this._data.image ||
      'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
    return this.element;
  }
}

const card = new Card(cats[0], '#card-template');