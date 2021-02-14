import CarGameView from './CarGameView.js';
import Car from './Game/Car.js';
import RacingCarGame from './Game/RacingCarGame.js';
import Validator from './Validatiors/Validator.js';

export default class CarGameManager {
  constructor($element) {
    this.$element = $element;
    this.carGameView = new CarGameView($element);
    this.validator = new Validator();
    this.initGame();
    this.bindEvents();
  }

  initGame() {
    this.carGameView.init();
    this.cars = [];
    this.carNames = [];
  }

  bindEvents() {
    this.bindInputCarNamesEvent();
    this.bindInputTryCountEvent();
    this.bindResetEvent();
  }

  bindInputCarNamesEvent() {
    this.$element.querySelector('#car-names-check-button').addEventListener('click', () => {
      this.carNamesInputHandler();
    });
  }

  bindInputTryCountEvent() {
    this.$element.querySelector('#try-count-check-button').addEventListener('click', () => {
      this.tryCountInputHandler();
    });
  }

  bindResetEvent() {
    this.$element.querySelector('#reset-button').addEventListener('click', () => {
      this.initGame();
    });
  }

  carNamesInputHandler() {
    this.carNames = this.carGameView.getCarNames();

    if (!this.validator.validateCarNames(this.carNames)) {
      this.initGame();
      return;
    }
    this.carGameView.displayTryCountView();
  }

  tryCountInputHandler() {
    const tryCount = this.carGameView.getTryCount();
    if (!this.validator.validateTryCount(tryCount)) {
      this.carGameView.resetTryCountView();
      return;
    }
    this.createCar();
    const racingCarGame = new RacingCarGame(this.cars, tryCount);
    this.carGameView.displayProgress(racingCarGame.getCars());
    this.carGameView.displayWinners(racingCarGame.getWinners());
  }

  createCar() {
    this.cars = this.carNames.map((carName) => new Car(carName));
  }
}
