import CarGameView from './CarGameView.js';
import Car from './Game/Car.js';
import RacingCarGame from './Game/RacingCarGame.js';
import Validator from './Validators/Validator.js';
import { NUMBERS } from './Constants/constants.js';

export default class CarGameManager {
  constructor($element) {
    this.$element = $element;
    this.carGameView = new CarGameView($element);
    this.validator = new Validator();
    this.initGame();
    this.bindEvents();

    this.winners = "";
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
    this.$element.querySelector('#car-names-check-button')
      .addEventListener('click', this.carNamesInputHandler.bind(this));
  }

  bindInputTryCountEvent() {
    this.$element.querySelector('#try-count-check-button')
      .addEventListener('click', this.tryCountInputHandler.bind(this));
  }

  bindResetEvent() {
    this.$element.querySelector('#reset-button')
      .addEventListener('click', this.initGame().bind(this));
  }

  carNamesInputHandler() {
    this.carNames = this.carGameView.getCarNames();
    const errorMessage = this.validator.validateCarNames(this.carNames);

    if (errorMessage) {
      this.carGameView.alertError(errorMessage);
      this.initGame();
      return;
    }

    this.carGameView.displayTryCountView();
  }

  displayNextProgress(racingCarGame) {
    racingCarGame.playOneRound();
    this.carGameView.displayProgress(racingCarGame.getCars());
  }

  displayResult(racingCarGame) {
    this.winners = racingCarGame.getWinners();
    this.carGameView.displayWinners(this.winners);
    setTimeout(alert, 2 * NUMBERS.SECOND, `🎉🎉🎉${this.winners}의 승리입니다. 축하합니다!🎉🎉🎉`);
  }

  hideSpinner() {
    this.$element.querySelectorAll('.spinner-container').forEach((spinner) => this.carGameView.hideView(spinner));
  }

  displayGameProgress(racingCarGame) {
    this.displayNextProgress(racingCarGame);
    const playByInterval = setInterval(this.displayNextProgress.bind(this), 1000, racingCarGame);
    setTimeout(clearInterval, racingCarGame.tryCount * NUMBERS.SECOND, playByInterval);
    setTimeout(this.hideSpinner.bind(this), racingCarGame.tryCount * NUMBERS.SECOND);
    setTimeout(this.displayResult.bind(this),
      racingCarGame.tryCount * NUMBERS.SECOND + 1 * NUMBERS.SECOND, racingCarGame);
  }

  tryCountInputHandler() {
    const tryCount = this.carGameView.getTryCount();
    const errorMessage = this.validator.validateTryCount(tryCount);

    if (errorMessage) {
      this.carGameView.alertError(errorMessage);
      this.carGameView.resetTryCountView();
      return;
    }

    this.createCar();

    const racingCarGame = new RacingCarGame(this.cars, tryCount);
    this.carGameView.displayProgress(this.cars);
    setTimeout(this.displayGameProgress.bind(this), 1 * NUMBERS.SECOND, racingCarGame);
  }

  setWinners(cars) {
    this.winners = new RacingCarGame().getWinners(cars);
  }

  createCar() {
    this.cars = this.carNames.map((carName) => new Car(carName));
  }
}
