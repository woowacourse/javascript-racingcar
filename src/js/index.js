import Car from './models/Car.js';
import RacingUI from './racingUI.js';
import { ALERT_MESSAGES, CLASS_NAMES, DELAY } from './constants.js';
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

  createCars = () => {
    const carNameInput = document.querySelector(CLASS_NAMES.CAR_NAME).value;
    if (!isCarNameFilled(carNameInput)) {
      return alert(ALERT_MESSAGES.CAR_NAME_EMPTY);
    }

    for (let name of carNameInput.split(',')) {
      if (!isCarNameUnderFive(name.trim().length)) {
        this.cars = [];
        return alert(ALERT_MESSAGES.CAR_NAME_OVER_FIVE);
      }
      const car = new Car(name.trim());
      this.cars.push(car);
    }

    this.UIController.showElement(CLASS_NAMES.TRY_COUNT_FORM);
  };

  mountTryCount = () => {
    const tryCountInput = document.querySelector(CLASS_NAMES.TRY_COUNT);
    if (!tryCountInput) return;

    const tryCountNumber = Number(tryCountInput.value);
    if (!isTryCountFilled(tryCountInput.value)) {
      return alert(ALERT_MESSAGES.TRY_COUNT_EMPTY);
    } else if (!isTryCountPos(tryCountNumber)) {
      return alert(ALERT_MESSAGES.TRY_COUNT_NEG);
    } else if (!isTryCountInt(tryCountNumber)) {
      return alert(ALERT_MESSAGES.TRY_COUNT_NOT_INT);
    }

    this.tryCount = tryCountNumber;
    this.startRace();
  };

  startRace = () => {
    this.UIController.showResult(this.cars);
    this.moveCars();
  };

  moveCars = () => {
    const moveInterval = setInterval((function moveEverySecond() {
      if (this.tryCount === 0) {
        clearInterval(moveInterval);
        this.getWinners();
        return;
      }
      this.tryCount--;
      this.cars.forEach(car => {
        const isCarMoved = car.move();
        this.UIController.printProgress(car, isCarMoved);
      });
      return moveEverySecond.bind(this);
    }).bind(this)(), DELAY.TURN_TIME)
  };

  getWinners = () => {
    const sortedCars = this.cars.sort((a, b) => {
      return b.getPosition() - a.getPosition();
    })

    let maxPosition = sortedCars[0].getPosition();
    for (let car of this.cars) {
      if (car.getPosition() === maxPosition) {
        car.wins();
      }
    }

    const winners = this.cars.filter(car => car.getIsWinner()).map(car => car.getName());
    this.UIController.showWinners(winners);
    document.querySelector(CLASS_NAMES.RESTART_BTN).addEventListener('click', this.restartGame);
  };

  restartGame = () => {
    this.UIController.clearUI();
    this.UIController.hideUI();
    this.resetValues();
  };

  addListeners = () => {
    document.querySelector(CLASS_NAMES.CAR_NAME_BTN).addEventListener('click', this.createCars);
    document.querySelector(CLASS_NAMES.TRY_COUNT_BTN).addEventListener('click', this.mountTryCount);
  };
}

const racing = new Racing();
racing.run();
