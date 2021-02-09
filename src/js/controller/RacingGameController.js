import { RacingGameView } from '../view/index.js';
import { RacingGame } from '../model/index.js';
import { InputValidator } from '../utils/index.js';
import { ALERT_RESTART } from '../constants/index.js';

export default class RacingGameController {
  constructor() {
    this.names;
    this.count;
    this.isEnd;
    this.view = new RacingGameView();
    this.init();
  }

  init() {
    this.names = [];
    this.count = 0;
    this.isEnd = false;
    this.view.renderInitialView();
    this.setEvent('click', '.car-name-btn', this.handleNameInput);
  }

  setEvent(type, targetName, eventHandler) {
    const $target = document.querySelector(targetName);
    $target.addEventListener(type, eventHandler.bind(this));
  }

  handleNameInput() {
    if (this.isEnd) {
      alert(ALERT_RESTART);

      return;
    }
    this.setNames();
  }

  setNames() {
    const $input = document.querySelector('.car-name-input');
    const validator = new InputValidator();
    try {
      validator.checkNameInput($input.value);
      this.names = $input.value.split(',');
      this.view.renderCountInput();
      this.setEvent('click', '.count-btn', this.handleCountInput);
    } catch (error) {
      this.handleInputException($input, error.message);
    }
  }

  handleCountInput() {
    if (this.isEnd) {
      alert(ALERT_RESTART);

      return;
    }
    this.setCount();
    this.count > 0 && this.runGame();
  }

  handleInputException($input, alertMessage) {
    alert(alertMessage);
    $input.value = '';
  }

  setCount() {
    const $input = document.querySelector('.count-input');
    const validator = new InputValidator();
    try {
      validator.checkCountInput(Number($input.value));
      this.count = Number($input.value);
    } catch (error) {
      this.handleInputException($input, error.message);
    }
  }

  runGame() {
    const game = new RacingGame(this.names, this.count);
    this.isEnd = true;
    this.view.renderProgressBar(game.cars);
    this.view.renderResult(game.getWinners());
    this.setEvent('click', '.reset-btn', this.init);
  }
}
