import Car from './Car.js';

class CarRacing {
  constructor() {
    this.participants = [];
    this.bindEvents();
  }

  bindEvents() {
    document.querySelector('#app').addEventListener('click', ({ target }) => {
      const targetId = target.id;
      const buttonIds = {
        'car-names-submit': () => {
          this.onSubmitCarName(
            document.querySelector('#car-names-input').value,
          );
        },
        'racing-count-submit': () => {},
        'restart-button': () => {},
      };
      if (!buttonIds[targetId]) return;
      buttonIds[targetId]();
    });
  }

  onSubmitCarName(names) {
    const carNames = names.split(',');
    if (!this.validateCarName(carNames))
      return alert('올바르지 않은 이름입니다.');
  }

  validateCarName(names) {
    return names.every(name => name.length <= 5 && name.length > 0);
  }
}

const carRacing = new CarRacing();
