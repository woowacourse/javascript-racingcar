import { isNumberBelowZero, pickNumberInRange, splitString } from '../lib/utils.js';
import Car from './car.js';
import RacingCarGameView from './view.js';

class RacingCarGame {
  constructor() {
    this.cars = null;
    this.count = null;
    this.view = new RacingCarGameView();
    this.initDOM();
    this.initHandler();
  }

  initDOM() {
    this.carNameInputField = document.querySelector('#car-name-input-field');
    this.countInputField = document.querySelector('#count-input-field');
  }

  initHandler() {
    this.carNameInputField.addEventListener('click', this.onCarNameInputFieldClick);
    this.countInputField.addEventListener('click', this.onCountInputFieldClick);
  }

  onCarNameInputFieldClick = (e) => {
    e.preventDefault();
    if (e.target.id === 'car-name-btn') {
      const names = splitString(e.currentTarget.querySelector('#car-name-input').value, ',');
      this.makeCars(names);
      this.view.renderCountInputForm();
    }
  };

  onCountInputFieldClick = (e) => {
    e.preventDefault();
    if (e.target.id === 'count-btn') {
      const count = e.currentTarget.querySelector('#count-input').value;
      try {
        this.setCount(count);
        this.simulateGame();
        this.view.renderResults(this.cars, this.getWinners());
        this.view.disableInputButtons();
        this.afterRenderComplete();
      } catch (error) {
        alert(error);
      }
    }
  };

  afterRenderComplete() {
    const restartButton = document.querySelector('#restart-btn');
    restartButton.addEventListener('click', () => window.location.reload());
    this.carNameInputField.removeEventListener('click', this.onCarNameInputFieldClick);
    this.countInputField.removeEventListener('click', this.onCountInputFieldClick);
  }

  setCount(count) {
    if (isNumberBelowZero(count)) {
      throw Error('횟수는 1이상을 입력해주셔야합니다.');
    }
    this.count = count;
  }

  makeCars(names) {
    try {
      this.cars = names.map((name) => new Car(name));
    } catch (error) {
      alert(error);
    }
  }

  simulateGame() {
    for (let i = 0; i < this.count; i += 1) {
      this.simulateRound();
    }
  }

  simulateRound() {
    this.cars.forEach((car) => {
      const random = pickNumberInRange(0, 9);
      if (random >= 4) {
        car.goForward();
      }
    });
  }

  getWinners() {
    let max = 0;
    this.cars.forEach(({ progress }) => {
      max = Math.max(progress, max);
    });
    const winners = this.cars.reduce((arr, { name, progress }) => {
      if (progress === max) {
        arr.push(name);
      }
      return arr;
    }, []);
    // winners -> ['asd','asfsf']
    return winners;
  }
}
export default RacingCarGame;
