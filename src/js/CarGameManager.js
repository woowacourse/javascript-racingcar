import CarGameView from './CarGameView.js';
import Car from './Car.js';
import CarNameValidator from './CarNameValidator.js';
import { CAR_NAME_ERROR_MESSAGE } from './constants.js';

export default class CarGameManager {
  constructor($element) {
    this.$element = $element;
    this.carGameView = new CarGameView($element);
    this.cars = [];
    this.carNames = [];
    this.bindInputCarNamesEvent();
    this.bindInputTryCountEvent();
    this.bindResetEvent();
  }

  initGame() {
    this.carGameView.init();
    this.cars = [];
  }

  bindInputCarNamesEvent() {
    document.querySelector('#input-car-names > div > button').addEventListener('click', () => {
      this.carNamesInputHandler();
    });
  }

  bindInputTryCountEvent() {
    document.querySelector('#input-try-count > div > button').addEventListener('click', () => {
      this.tryCountInputHandler();
    });
  }

  bindResetEvent() {
    document.querySelector('#display-game-result > div > button').addEventListener('click', () => {
      this.resetHandler();
    });
  }

  validateCarNames() {
    this.carNames = this.carNames.map((name) => name.trim());
    const carNameValidator = new CarNameValidator();

    const checkNameValue = {
      lengthCheck: () => (carNameValidator.isNotValidLength(this.carNames)
        ? alert(CAR_NAME_ERROR_MESSAGE.INVALID_LENGTH) : true),
      blankCheck: () => (carNameValidator.isIncludingBlank(this.carNames)
        ? alert(CAR_NAME_ERROR_MESSAGE.INCLUDE_BLANK) : true),
      duplicateCheck: () => (carNameValidator.isDuplicated(this.carNames)
        ? alert(CAR_NAME_ERROR_MESSAGE.DUPLICATED) : true),
      incompleteWordCheck: () => (carNameValidator.isInCompleteWord(this.carNames)
        ? alert(CAR_NAME_ERROR_MESSAGE.INCOMPLETE_WORD) : true),
    };

    for (const check in checkNameValue) {
      if (!checkNameValue[check]()) {
        return false;
      }
    }
    return true;
  }

  carNamesInputHandler() {
    this.carNames = document.querySelector('#input-car-names > div > input').value.split(',');
    if (!this.validateCarNames()) {
      return this.initGame();
    }
    this.createCar();
    this.carGameView.showView(document.querySelector('#input-try-count'));
  }

  tryCountInputHandler() {
    const tryCount = Number(document.querySelector('#input-try-count > div > input').value);
    this.playGame(tryCount);
    this.carGameView.showView(document.querySelector('#display-game-progress'));
    this.carGameView.showView(document.querySelector('#display-game-result'));
  }

  resetHandler() {
    this.initGame();
  }

  createCar() {
    this.carNames.map((name) => this.cars.push(new Car(name)));
    console.log(this.cars);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  playOneRound() {
    this.cars.map((car) => {
      if (this.getRandomInt(10) >= 4) {
        car.run();
      }
    });
  }

  getWinner() {
    const maxPosition = this.cars.reduce((max, car) => Math.max(max, car.distance), 0);
    return this.cars.filter((car) => car.distance === maxPosition).map((car) => car.name).join(', ');
  }

  playGame(tryCount) {
    for (let i = 0; i < tryCount; i++) {
      this.playOneRound();
    }
    this.carGameView.displayProgress(this.cars);
    this.carGameView.displayWinners(this.getWinner());
  }
}
