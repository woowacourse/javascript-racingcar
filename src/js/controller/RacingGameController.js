import { RacingGameView } from '../view/index.js';
import { RacingGame } from '../model/index.js';
import { InputValidator } from '../utils/index.js';
import {
  ALERT_RESTART,
  PREFIX_RESULT,
  SUFFIX_RESULT,
  MSG_INTERVAL,
} from '../constants/index.js';

export default class RacingGameController {
  constructor() {
    this.view = new RacingGameView();
    this.initGame();
  }

  initGame() {
    this.game = new RacingGame();
    this.view.renderInitialView();
    this.setEvent('click', '.car-name-btn', this.handleNameInput.bind(this));
  }

  setEvent(type, targetName, eventHandler) {
    const $target = document.querySelector(targetName);

    $target.addEventListener(type, eventHandler);
  }

  handleNameInput() {
    const $input = document.querySelector('.car-name-input');

    if (this.game.isEnd) {
      alert(ALERT_RESTART);

      return;
    }
    if (this.checkNames($input)) {
      this.game.setCars($input.value.split(','));
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

  handleInputException($input, alertMessage) {
    alert(alertMessage);
    $input.value = '';
  }

  handleCountInput() {
    const $input = document.querySelector('.count-input');

    if (this.game.isEnd) {
      alert(ALERT_RESTART);

      return;
    }
    if (this.checkCount($input)) {
      this.runGame($input);
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

  runGame($input) {
    this.game.runRace(Number($input.value));
    this.handleResult(this.game.cars, this.game.getWinners());
  }

  handleResult(cars, winners) {
    const setEventParams = ['click', '.reset-btn', this.initGame.bind(this)];

    this.view.renderProgress(cars);
    this.setTimer(this.view.renderResult, cars.length, winners);
    this.setTimer(this.setEvent, cars.length, ...setEventParams);
    this.setTimer(this.sendResultMessage, cars.length + MSG_INTERVAL, winners);
  }

  setTimer(task, second, ...parameters) {
    setTimeout(task, second * 1000, ...parameters);
  }

  sendResultMessage(winners) {
    alert(`${PREFIX_RESULT}${winners.join(', ')}${SUFFIX_RESULT}`);
  }
}
