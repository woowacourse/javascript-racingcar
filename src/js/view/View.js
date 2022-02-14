import { SELECTOR } from '../constants.js';
import { $, $all } from '../utils/utils.js';
// import template from '../templates.js';

export default class View {
  constructor() {
    this.$app = $(SELECTOR.$APP);
    this.$carNameInput = $(SELECTOR.$CAR_NAME_INPUT);
    this.$carNameButton = $(SELECTOR.$CAR_NAME_BUTTON);
    this.$racingCountInput = $(SELECTOR.$RACING_COUNT_INPUT);
    this.$racingCountButton = $(SELECTOR.$RACING_COUNT_BUTTON);
    this.$result = $(SELECTOR.$RESULT);
    this.$racingResult = $(SELECTOR.$RACING_RESULT);
  }

  get result() {
    return this.$result;
  }

  get racingResult() {
    return this.$racingResult;
  }

  get carNameInput() {
    return this.$carNameInput;
  }

  get racingCountInput() {
    return this.$racingCountInput;
  }

  alertErrorMessage(message) {
    alert(message);
  }

  initializeInput(clearElement, focusElement = clearElement) {
    clearElement.value = '';
    focusElement.focus();
  }

  racingCountInputVisibiled() {
    $(SELECTOR.$INPUT_FORM_LAST_CHILD).style.display = 'block';
  }

  render(selector, template) {
    selector.innerHTML = template;
  }

  bindEventListener(type, selector, callback) {
    const children = [...$all(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$app.addEventListener(type, (e) => {
      if (!isTarget(e.target)) return;

      e.preventDefault();
      callback(e);
    });
  }

  bindClickCarNameButton(callback) {
    this.bindEventListener('click', SELECTOR.$CAR_NAME_BUTTON, () => {
      callback();
    });
  }

  bindClickRacingCountButton(callback) {
    this.bindEventListener('click', SELECTOR.$RACING_COUNT_BUTTON, () => {
      callback();
    });
  }

  bindClickRestartButton(callback) {
    this.bindEventListener('click', SELECTOR.$RESTART_BUTTON, () => {
      callback();
    });
  }
}
