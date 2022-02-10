import { isNumberBelowZero, splitString } from '../lib/utils.js';
import Car from './car.js';

class RacingCarGame {
  constructor() {
    this.cars = null;
    this.count = null;
    this.initDOM();
    this.initHandler();
  }

  initDOM() {
    this.carNameInputField = document.querySelector('#car-name-input-field');
    this.countInputField = document.querySelector('#count-input-field');
  }

  initHandler() {
    this.carNameInputField.addEventListener(
      'click',
      this.onCarNameInputFieldClick.bind(this)
    );
    this.countInputField.addEventListener(
      'click',
      this.onCountInputFieldClick.bind(this)
    );
  }

  onCarNameInputFieldClick(e) {
    e.preventDefault();
    if (e.target.id === 'car-name-btn') {
      const names = splitString(
        e.currentTarget.querySelector('#car-name-input').value,
        ','
      );
      this.makeCars(names);
    }
  }

  onCountInputFieldClick(e) {
    e.preventDefault();
    if (e.target.id === 'count-btn') {
      const count = e.currentTarget.querySelector('#count-input').value;
      try {
        this.setCount(count);
      } catch (error) {
        alert(error);
      }
    }
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
}
export default RacingCarGame;
