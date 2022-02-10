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
        'racing-count-submit': () => {
          this.onSubmitRacingCount(
            document.querySelector('#racing-count-input').value,
          );
        },
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
    this.participants = carNames.map(name => new Car(name));
  }

  onSubmitRacingCount(count) {
    if (!this.participants.length)
      return alert('자동차 이름이 입력되지 않았습니다.');
    if (!this.validateRacingCount(count))
      return alert('올바르지 않은 레이싱 횟수입니다');
    this.participants.map(car => {
      for (let i = 0; i < count; i++) {
        car.move();
      }
    });
    console.log(this.participants);
  }

  validateCarName(names) {
    return names.every(name => name.length <= 5 && name.length > 0);
  }

  validateRacingCount(count) {
    return count > 0;
  }
}

const carRacing = new CarRacing();
