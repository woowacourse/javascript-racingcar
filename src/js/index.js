import Car from './models/Car.js';
import RacingUI from './racingUI.js';
import { ALERT, CLASS } from './constants.js';
import {
  isCarNameFilled,
  isCarNameUnderFive,
  isTryCountFilled,
  isTryCountPos,
  isTryCountInt,
} from './validation.js';

export default class Racing {
  constructor() {
    this.UIController = new RacingUI();
  }

  run = () => {
    this.resetValues();
    this.UIController.hideUI();
    this.addListeners();
  };

  resetValues = () => {
    this.cars = [];
    this.tryCount = 0;
  };

  getCarNames = () => {
    const carNameInput = document.querySelector(CLASS.CAR_NAME).value;
    if (!isCarNameFilled(carNameInput)) {
      return alert(ALERT.CAR_NAME_EMPTY);
    }

    for (let name of carNameInput.split(',')) {
      if (!isCarNameUnderFive(name.trim().length)) {
        this.cars = [];
        return alert(ALERT.CAR_NAME_OVER_FIVE);
      }
      const car = new Car(name.trim());
      this.cars.push(car);
    }

    this.UIController.showElement(CLASS.TRY_COUNT_FORM);
  };

  getTryCount = () => {
    const tryCountInput = document.querySelector(CLASS.TRY_COUNT).value;
    const tryCountNumber = Number(tryCountInput);

    if (!isTryCountFilled(tryCountInput)) {
      return alert(ALERT.TRY_COUNT_EMPTY);
    } else if (!isTryCountPos(tryCountNumber)) {
      return alert(ALERT.TRY_COUNT_NEG);
    } else if (!isTryCountInt(tryCountNumber)) {
      return alert(ALERT.TRY_COUNT_NOT_INT);
    }

    this.tryCount = tryCountNumber;
    this.moveCars();
    this.getWinners();
  };

  moveCars = () => {
    for (let i = 0; i < this.tryCount; i++) {
      for (let car of this.cars) {
        car.move();
      }
    }
    this.UIController.showProgress(this.cars);
  };

  getWinners = () => {
    let maxPosition = 0;
    const winners = this.cars.reduce((winners, car) => {
      if (car.position === maxPosition) {
        winners.push(car.name);
      } else if (car.position > maxPosition) {
        winners = [car.name];
        maxPosition = car.position;
      }
      return winners;
    }, []);

    this.UIController.showWinners(winners);
    document
      .querySelector(CLASS.RESTART_BTN)
      .addEventListener('click', this.restartGame);
  };

  restartGame = () => {
    this.UIController.clearUI();
    this.UIController.hideUI();
    this.resetValues();
  };

  addListeners = () => {
    document
      .querySelector(CLASS.CAR_NAME_BTN)
      .addEventListener('click', this.getCarNames);
    document
      .querySelector(CLASS.TRY_COUNT_BTN)
      .addEventListener('click', this.getTryCount);
  };
}

const racing = new Racing();
racing.run();
