import CarGameView from './CarGameView.js';
import Car from './Game/Car.js';
import RacingCarGame from './Game/RacingCarGame.js';
import Validator from './Validators/Validator.js';
import { NUMBERS } from './Constants/constants.js';
import { disableElement, enableElement } from './utils.js';

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
    this.carNames = [];
    setTimeout(() => this.$element.querySelector('#car-names-input').focus(), 0);
  }

  resetGame() {
    this.initGame();
    enableElement(this.$element.querySelector('#car-names-input'));
    enableElement(this.$element.querySelector('#car-names-check-button'));
    enableElement(this.$element.querySelector('#try-count-input'));
    enableElement(this.$element.querySelector('#try-count-check-button'));
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
    this.$element.querySelector('#try-count-input').focus();
  }

  handleCountInput() {
    const tryCount = this.carGameView.getTryCount();
    const errorMessage = this.validator.validateTryCount(tryCount);

    this.carGameView.hideView(this.carGameView.gameProgressView);
    this.carGameView.hideView(this.carGameView.gameResultView);

    clearTimeout(this.gameProgressTimeout);
    clearInterval(this.gamePlayInterval);

    if (errorMessage) {
      alert(errorMessage);
      this.carGameView.resetTryCountView();
      return;
    }

    disableElement(this.$element.querySelector('#car-names-input'));
    disableElement(this.$element.querySelector('#car-names-check-button'));
    disableElement(this.$element.querySelector('#try-count-input'));
    disableElement(this.$element.querySelector('#try-count-check-button'));

    this.racingCarGame = new RacingCarGame(this.carNames, tryCount);
    this.carGameView.displayProgress(this.racingCarGame.getCars());
    this.gamePlayTimeout = setTimeout(this.displayGameProgress.bind(this), 1 * NUMBERS.SECOND);
  }

  displayGameProgress() {
    this.displayNextProgress();
    this.gamePlayInterval = setInterval(this.displayNextProgress.bind(this), 1000);
  }

  displayNextProgress() {
    if (this.racingCarGame.getTryCount() === 0) {
      clearInterval(this.gamePlayInterval);
      this.hideSpinner();
      this.displayResult();
      return;
    }
    this.racingCarGame.playGame();
    this.carGameView.displayProgress(this.racingCarGame.getCars());
    this.racingCarGame.setTryCount(this.racingCarGame.getTryCount() - 1);
  }

  hideSpinner() {
    this.$element.querySelectorAll('.spinner-container')
      .forEach((spinner) => this.carGameView.hideView(spinner));
  }

  displayResult() {
    const winners = this.racingCarGame.getWinners();
    this.carGameView.displayWinners(winners);
    this.alertGameResultTimeout = setTimeout(alert,
      2 * NUMBERS.SECOND, `🎉🎉🎉${winners}의 승리입니다. 축하합니다!🎉🎉🎉`);
  }
}
