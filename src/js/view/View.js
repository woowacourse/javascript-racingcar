import { SELECTOR } from '../constants.js';
import { $, $all } from '../utils/utils.js';

export default class View {
  constructor() {
    this.$app = $(SELECTOR.$APP);
    this.$carNameInput = $(SELECTOR.$CAR_NAME_INPUT);
    this.$carNameButton = $(SELECTOR.$CAR_NAME_BUTTON);
    this.$racingCountInput = $(SELECTOR.$RACING_COUNT_INPUT);
    this.$racingCountButton = $(SELECTOR.$RACING_COUNT_BUTTON);
    this.$racingProgress = $(SELECTOR.$RACING_PROGRESS);
    this.$racingResult = null;
    this.$resultList = null;
    this.$$progressList = null;
  }

  set racingResult(racingResult) {
    this.$racingResult = racingResult;
  }

  get carNameButton() {
    return this.$carNameButton;
  }

  get racingCountButton() {
    return this.$racingCountButton;
  }

  get progressList() {
    return this.$$progressList;
  }

  get app() {
    return this.$app;
  }

  get racingProgress() {
    return this.$racingProgress;
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

  toggleDisabledButton(selector) {
    selector.disabled = !selector.disabled;
    selector.classList.toggle('disabled');
  }

  racingCountInputVisibled() {
    $(SELECTOR.$INPUT_FORM_LAST_CHILD).classList.remove('invisibled');
  }

  racingCountInputInvisibled() {
    $(SELECTOR.$INPUT_FORM_LAST_CHILD).classList.add('invisibled');
  }

  removeRender(parent, child) {
    child && parent.removeChild(child);
  }

  render(selector, position, template) {
    selector.insertAdjacentHTML(position, template);
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
      this.$resultList = $(SELECTOR.$RESULT_LIST);
    });
  }

  bindClickRacingCountButton(callback) {
    this.bindEventListener('click', SELECTOR.$RACING_COUNT_BUTTON, () => {
      this.$$progressList = $all(SELECTOR.$PROGRESS_LIST);
      callback();
    });
  }

  bindClickRestartButton(callback) {
    this.bindEventListener('click', SELECTOR.$RESTART_BUTTON, () => {
      callback();
    });
  }

  init() {
    this.$racingCountInput.value = '';
    this.$carNameInput.value = '';
    this.$carNameInput.focus();
    this.racingCountInputInvisibled();

    this.removeRender(this.$app, this.$racingResult);
    this.removeRender(this.$racingProgress, this.$resultList);

    this.toggleDisabledButton(this.$carNameButton);
    this.toggleDisabledButton(this.$racingCountButton);
  }
}
