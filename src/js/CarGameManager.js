import CarGameView from './CarGameView.js';
import RacingCarGame from './Game/RacingCarGame.js';
import { CELEBRATE_MESSAGE } from './Utils/constants.js';
import { $, $$ } from './Utils/dom.js';
import RacingCarValidator from './Validators/RacingCarValidator.js';

export default class CarGameManager {
  constructor() {
    this.carGameView = new CarGameView();
    this.racingCarValidator = new RacingCarValidator();
    this.bindEvents();
  }

  initGame() {
    this.carGameView.init();
    this.cars = [];
    this.carNames = [];
    this.errorMessage = '';
  }

  alertMessage(message) {
    alert(message);
  }

  renderInitGameProgress() {
    this.carGameView.showView($('#display-game-progress'));
    this.carGameView.renderGameProgress(this.racingCarGame.getCars());
  }

  renderResult() {
    this.carGameView.renderWinners(this.racingCarGame.getWinners());
    this.carGameView.showView($('#display-game-result'));

    setTimeout(() => this.alertMessage(CELEBRATE_MESSAGE), 2000);
  }

  playGame(resolve) {
    this.racingCarGame.runGame();
    this.carGameView.renderGameProgress(this.racingCarGame.getCars());

    if (this.racingCarGame.getTryCount() === 0) {
      clearInterval(this.racingProgress);
      $$('.spinner-container').forEach((spinner) => (spinner.style.display = 'none'));
      resolve();
    }
  }

  bindEvents() {
    this.bindInputCarNamesEvent();
    this.bindInputTryCountEvent();
    this.bindResetEvent();
  }

  bindInputCarNamesEvent() {
    $('#input-names-btn').addEventListener('click', () => {
      this.carNamesInputHandler();
    });
  }

  bindInputTryCountEvent() {
    $('#input-count-btn').addEventListener('click', () => {
      this.tryCountInputHandler();
    });
  }

  bindResetEvent() {
    $('#reset-btn').addEventListener('click', () => {
      this.resetHandler();
    });
  }

  carNamesInputHandler() {
    this.carNames = $('#input-car-names')
      .value.split(',')
      .map((name) => name.trim());

    const errorMessage = this.racingCarValidator.checkCarNamesValidation(this.carNames);
    if (errorMessage) {
      this.alertMessage(errorMessage);
      this.initGame();
      return;
    }

    this.carGameView.showView($('#input-count-wrapper'));
  }

  tryCountInputHandler() {
    const tryCount = Number($('#input-try-count').value);
    const errorMessage = this.racingCarValidator.checkTryCountValidation(tryCount);

    if (errorMessage) {
      this.alertMessage(errorMessage);
      this.carGameView.resetInput($('#input-count-wrapper > div'));
      return;
    }

    this.racingCarGame = new RacingCarGame(this.carNames, tryCount);
    new Promise((resolve) => {
      this.renderInitGameProgress();
      this.racingProgress = setInterval(() => this.playGame(resolve), 1000);
    }).then(() => this.renderResult());
  }

  resetHandler() {
    this.initGame();
  }
}
