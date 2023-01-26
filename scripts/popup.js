class Popup {
  constructor(className) {
    this._className = className;
    this.popup = document.querySelector(`.${className}`);
    this._handleEscUp = this._handleEscUp.bind(this);
  }

  // Закрытие Esc
  _handleEscUp(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  // Открытие попап после +
  open() {
    this.popup.classList.add('popup_active');
    document.addEventListener('keyup', this._handleEscUp);
  }

  // Закрытие формы обычное
  close() {
    this.popup.classList.remove('popup_active');
    document.removeEventListener('keyup', this._handleEscUp);
  }


  // Закрытие формы по клику вне поля формы
  setEventListener() {
    this.popup.addEventListener('click', (evt) => {
      if (
        evt.target.classList.contains(this._className) ||
        evt.target.closest('.popup__close')
      ) {
        this.close();
      }
    });
  }


}
