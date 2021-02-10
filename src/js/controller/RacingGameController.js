import { RacingGameView } from '../view/index.js';
import { RacingGame } from '../model/index.js';
import { InputValidator } from '../utils/index.js';
import { ALERT_RESTART } from '../constants/index.js';

export default class RacingGameController {
  constructor() {
    this.view = new RacingGameView();
    this.initGame();
  }

  initGame() {
    this.names = [];
    this.count = 0;
    this.isEnd = false;
    this.view.renderInitialView();
    this.setEvent('click', '.car-name-btn', this.handleNameInput.bind(this));
  }

  setEvent(type, targetName, eventHandler) {
    const $target = document.querySelector(targetName);

    $target.addEventListener(type, eventHandler);
  }

  handleNameInput() {
    const $input = document.querySelector('.car-name-input');

    if (this.isEnd) {
      alert(ALERT_RESTART);

      return;
    }
    if (this.checkNames($input)) {
      this.setNames($input);
      this.view.renderCountInput();
      this.setEvent('click', '.count-btn', this.handleCountInput.bind(this));
    }
  }

  checkNames($input) {
    const validator = new InputValidator();

    try {
      validator.checkNameInput($input.value);

      return true;
    } catch (error) {
      this.handleInputException($input, error.message);

      return false;
    }
  }

  setNames($input) {
    this.names = $input.value.split(',');
  }

  handleInputException($input, alertMessage) {
    alert(alertMessage);
    $input.value = '';
  }

  handleCountInput() {
    const $input = document.querySelector('.count-input');

    if (this.isEnd) {
      alert(ALERT_RESTART);

      return;
    }
    if (this.checkCount($input)) {
      this.setCount($input);
      this.runGame();
    }
  }

  checkCount($input) {
    const validator = new InputValidator();

    try {
      validator.checkCountInput(Number($input.value));

      return true;
    } catch (error) {
      this.handleInputException($input, error.message);

      return false;
    }
  }

  setCount($input) {
    this.count = Number($input.value);
  }

  runGame() {
    const game = new RacingGame(this.names, this.count);

    this.isEnd = true;
    this.view.renderProgressBar(game.cars);
    this.view.renderResult(game.getWinners());
    this.setEvent('click', '.reset-btn', this.initGame.bind(this));
  }
}
