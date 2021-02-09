import Car from './models/Car.js';
export default class Racing {
  constructor() {
    this.cars = [];
    this.tryCount = 0;

    this.resetUI();
    this.addListeners();
  }

  resetUI() {
    document.querySelector('.try-count-form').style.display = 'none';
    document.querySelector('.progress-container').style.display = 'none';
    document.querySelector('.result-container').style.display = 'none';
  }

  getCarNames() {
    const carNameInput = document.querySelector('.car-name').value;
    if (!carNameInput) {
      alert('자동차 이름을 입력해주세요.');
      return;
    }
    for (let name of carNameInput.split(',')) {
      if (name.trim().length > 5) {
        alert('자동차 이름을 5자 이하로 입력해 주세요.');
        return;
      } 
      const car = new Car(name.trim());
      this.cars.push(car);
    }

    document.querySelector('.try-count-form').style.display = 'block';
  }

  getTryCount() {
    const tryCountInput = document.querySelector('.try-count').value;
    const tryCountNumber = Number(tryCountInput);
    if (!tryCountInput) {
      alert('시도 횟수를 입력해주세요.');
      return;
    } else if (tryCountNumber <= 0) {
      alert('양수를 입력해주세요.');
      return;
    }
    this.tryCount = tryCountNumber;
  }

  addListeners() {
    document
      .querySelector('.car-name-btn')
      .addEventListener('click', this.getCarNames.bind(this));
    document
      .querySelector('.try-count-btn')
      .addEventListener('click', this.getTryCount.bind(this));
  }
}

new Racing();
