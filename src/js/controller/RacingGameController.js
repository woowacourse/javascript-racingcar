import { RacingGameView } from '../view/index.js';
import { InputValidator } from '../utils/index.js';

export default class RacingGameController {
  constructor() {
    this.names = '';
    this.count = 0;
    this.view = new RacingGameView();
    this.init();
  }

  init() {
    this.view.renderInitialView();
    this.setEvent('click', '.input-container', this.handleInput);
  }

  setEvent(type, targetName, eventHandler) {
    const $target = document.querySelector(targetName);
    $target.addEventListener(type, eventHandler.bind(this));
  }

  handleInput({ target: { className } }) {
    if (className.includes('car-name-btn')) {
      this.handleNameInput();
    }
    if (className.includes('count-btn')) {
      this.handleCountInput();
    }
  }

  handleNameInput() {
    const $input = document.querySelector('.car-name-input');
    const validator = new InputValidator();
    try {
      validator.checkNameInput($input.value);
      this.names = $input.value;
      this.view.renderCountInput();
    } catch (error) {
      this.handleInputError($input, error.message);
    }
  }

  handleInputError($input, alertMessage) {
    alert(alertMessage);
    $input.value = '';
  }

  handleCountInput() {
    const $input = document.querySelector('.count-input');
    const validator = new InputValidator();
    try {
      validator.checkCountInput(Number($input.value));
      this.count = Number($input.value);
    } catch (error) {
      this.handleInputError($input, error.message);
    }
    // 유효성 검사
    // this.count에 할당
    // const { result } = new RacingGame(this.names, this.count);
    // this.view.renderResult(result);
    // this.setEvent('click', '.reset-btn', this.init);
  }
}
