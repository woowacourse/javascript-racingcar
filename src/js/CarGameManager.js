import CarGameView from './CarGameView.js';

import RacingCarGame from './Game/RacingCarGame.js';

import { carNameValidator, tryCountValidator } from './Validators/racingCarValidator.js';

import elements from './Utils/elements.js';
import { alertMessage } from './Utils/utils.js';
import { $$ } from './Utils/dom.js';

import { CELEBRATE_MESSAGE } from './constants.js';

export default class CarGameManager {
  constructor() {
    this.carGameView = new CarGameView();
    this.bindEvents();
  }

  initGame() {
    this.carGameView.init();
    this.cars = [];
    this.carNames = [];
    this.errorMessage = '';
  }

  bindEvents() {
    this.bindInputCarNamesEvent();
    this.bindInputTryCountEvent();
    this.bindResetEvent();
  }

  bindInputCarNamesEvent() {
    elements.$inputNameBtn.addEventListener('click', () => {
      this.carNamesInputHandler();
    });
  }

  carNamesInputHandler() {
    this.carNames = elements.$inputCarNames.value.split(',').map((name) => name.trim());

    const errorMessage = carNameValidator(this.carNames);
    if (errorMessage) {
      alertMessage(errorMessage);
      this.initGame();
      return;
    }

    this.carGameView.showView(elements.$inputCountWrapper);
  }

  bindInputTryCountEvent() {
    elements.$inputTryCountBtn.addEventListener('click', () => {
      this.tryCountInputHandler();
    });
  }

  tryCountInputHandler() {
    const tryCount = Number(elements.$inputTryCount.value);
    const errorMessage = tryCountValidator(tryCount);

    if (errorMessage) {
      alertMessage(errorMessage);
      this.carGameView.resetInput(elements.$inputTryCount);
      return;
    }

    this.racingCarGame = new RacingCarGame(this.carNames, tryCount);
    new Promise((resolve) => {
      this.renderInitGameProgress();
      this.racingProgress = setInterval(() => this.playGame(resolve), 1000);
    }).then(() => this.renderResult());
  }

  renderInitGameProgress() {
    this.carGameView.showView(elements.$gameProgressSection);
    this.carGameView.renderGameProgress(this.racingCarGame.getCars());
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

  renderResult() {
    this.carGameView.renderWinners(this.racingCarGame.getWinners());
    this.carGameView.showView(elements.$gameResultSection);

    setTimeout(() => alertMessage(CELEBRATE_MESSAGE), 2000);
  }

  bindResetEvent() {
    elements.$resetBtn.addEventListener('click', () => {
      this.initGame();
    });
  }
}
