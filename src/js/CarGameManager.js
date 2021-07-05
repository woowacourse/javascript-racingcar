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
    elements.$inputNameButton.disabled = false;
    elements.$inputTryCountButton.disabled = false;

    this.carGameView.init();
    this.errorMessage = '';
  }

  bindEvents() {
    this.bindInputCarNamesEvent();
    this.bindInputTryCountEvent();
    this.bindResetEvent();
  }

  bindInputCarNamesEvent() {
    elements.$inputNameForm.addEventListener('submit', this.carNamesInputHandler.bind(this));
  }

  bindInputTryCountEvent() {
    elements.$inputTryCountForm.addEventListener('submit', this.tryCountInputHandler.bind(this));
  }

  bindResetEvent() {
    elements.$resetBtn.addEventListener('click', () => {
      this.initGame();
    });
  }

  carNamesInputHandler(e) {
    e.preventDefault();

    const [input, button] = e.target;
    this.carNames = input.value.split(',').map((name) => name.trim());

    if (carNameValidator(this.carNames)) {
      alertMessage(errorMessage);
      this.initGame();
      return;
    }

    button.disabled = true;
    this.carGameView.showView(elements.$inputCountSection);
  }

  async tryCountInputHandler(e) {
    e.preventDefault();

    const [input, button] = e.target;
    const tryCount = Number(input.value);

    if (tryCountValidator(tryCount)) {
      alertMessage(errorMessage);
      this.carGameView.resetInput(elements.$inputTryCount);
      return;
    }

    button.disabled = true;
    await this.playGame(tryCount);
    this.showResult();
  }

  playGame(tryCount) {
    this.racingCarGame = new RacingCarGame(this.carNames, tryCount);
    this.carGameView.renderInitGameProgress(this.racingCarGame.getCars());

    return new Promise((resolve) => {
      this.racingProgress = setInterval(() => {
        this.racingCarGame.runGame();
        this.carGameView.renderGameProgress(this.racingCarGame.getCars());

        if (this.racingCarGame.getTryCount() === 0) {
          clearInterval(this.racingProgress);
          $$('.spinner-container').forEach((spinner) => (spinner.style.display = 'none'));
          resolve();
        }
      }, 1000);
    });
  }

  showResult() {
    this.carGameView.renderResult(this.racingCarGame.getWinners());
    elements.$resetBtn.disabled = true;

    setTimeout(() => {
      alertMessage(CELEBRATE_MESSAGE);
      elements.$resetBtn.disabled = false;
    }, 2000);
  }
}
