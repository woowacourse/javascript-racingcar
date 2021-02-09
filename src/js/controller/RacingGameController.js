import { RacingGameView } from '../view/index.js';
import { RacingGame } from '../model/index.js';
import { InputValidator } from '../utils/index.js';

export default class RacingGameController {
  constructor() {
    this.names = [];
    this.count = 0;
    this.isEnd = false;
    this.view = new RacingGameView();
    this.init();
  }

  init() {
    this.isEnd = false;
    this.view.renderInitialView();
    this.setEvent('click', '.input-container', this.handleInput);
  }

  setEvent(type, targetName, eventHandler) {
    const $target = document.querySelector(targetName);
    $target.addEventListener(type, eventHandler.bind(this));
  }

  handleInput({ target: { classList } }) {
    if (this.isEnd) {
      alert('재시작 버튼을 눌러주세요.');

      return;
    }
    if (classList.contains('car-name-btn')) {
      this.setNames();
    }
    if (classList.contains('count-btn')) {
      this.setCount();
      this.count > 0 && this.runGame();
    }
  }

  setNames() {
    const $input = document.querySelector('.car-name-input');
    const validator = new InputValidator();
    try {
      validator.checkNameInput($input.value);
      this.names = $input.value.split(',');
      this.view.renderCountInput();
    } catch (error) {
      this.handleInputException($input, error.message);
    }
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
    const { cars, winners } = new RacingGame(this.names, this.count);
    this.isEnd = true;
    console.log(cars, winners);
    // this.view.renderProgressBar(cars);
    // this.view.renderResult(winners);
    // this.setEvent('click', '.reset-btn', this.init);
  }
}
