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
  }

  initGame() {
    this.carGameView.init();
    this.cars = [];
    this.carNames = [];
  }

  resetGame() {
    this.initGame();
    clearTimeout(this.alertGameResultTimeout);
  }

  bindEvents() {
    this.bindInputCarNamesEvent();
    this.bindInputTryCountEvent();
    this.bindResetEvent();
  }

  bindInputCarNamesEvent() {
    this.$element.querySelector('#car-names-check-button')
      .addEventListener('click', this.handleCarNamesInput.bind(this));
  }

  bindInputTryCountEvent() {
    this.$element.querySelector('#try-count-check-button')
      .addEventListener('click', this.handleCountInput.bind(this));
  }

  bindResetEvent() {
    this.$element.querySelector('#reset-button')
      .addEventListener('click', this.resetGame.bind(this));
  }

  handleCarNamesInput() {
    this.carNames = this.carGameView.getCarNames();
    const errorMessage = this.validator.validateCarNames(this.carNames);

    if (errorMessage) {
      this.carGameView.alertError(errorMessage);
      this.initGame();
      return;
    }

    this.carGameView.displayTryCountView();
  }

  displayResult() {
    const winners = this.racingCarGame.getWinners();
    this.carGameView.displayWinners(winners);
    this.alertGameResultTimeout = setTimeout(alert, 2 * NUMBERS.SECOND, `🎉🎉🎉${winners}의 승리입니다. 축하합니다!🎉🎉🎉`);
  }

  hideSpinner() {
    this.$element.querySelectorAll('.spinner-container').forEach((spinner) => this.carGameView.hideView(spinner));
  }

  displayNextProgress() {
    if (this.racingCarGame.tryCount === 0) {
      clearInterval(this.gamePlayInterval);
      this.hideSpinner();
      this.displayResult();
      return;
    }
    this.racingCarGame.playGame();
    this.carGameView.displayProgress(this.racingCarGame.getCars());
    this.racingCarGame.tryCount -= 1;
  }

  displayGameProgress() {
    this.displayNextProgress();
    this.gamePlayInterval = setInterval(this.displayNextProgress.bind(this), 1000);
  }

  handleCountInput() {
    const tryCount = this.carGameView.getTryCount();
    const errorMessage = this.validator.validateTryCount(tryCount);

    clearTimeout(this.gameProgressTimeout);
    clearInterval(this.gamePlayInterval);

    if (errorMessage) {
      this.carGameView.alertError(errorMessage);
      this.carGameView.resetTryCountView();
      return;
    }

    this.createCar();

    this.racingCarGame = new RacingCarGame(this.cars, tryCount);
    this.carGameView.displayProgress(this.cars);
    this.gamePlayTimeout = setTimeout(this.displayGameProgress.bind(this), 1 * NUMBERS.SECOND);
  }

  createCar() {
    this.cars = this.carNames.map((carName) => new Car(carName));
  }
}
