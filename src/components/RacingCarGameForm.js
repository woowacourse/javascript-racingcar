import { $, getEnterEvent, getInputValue } from '../utils/dom.js';
import { parseCarNames } from '../utils/racingGame.js';
import {
  isValidCarNameLength,
  isDifferentCarNames,
  isValidRacingCount,
  isInteger,
} from '../utils/validations.js';
import { SELECTOR, MESSAGE } from '../constants.js';

export default class Form {
  #container = $(SELECTOR.RACING_GAME_FORM);
  #props = {};

  constructor(props) {
    this.#props = props;
    this.bindEvents();
  }

  bindEvents() {
    const carNamesInput = $(SELECTOR.CAR_NAMES_INPUT, this.#container);
    const racingCountInput = $(SELECTOR.RACING_COUNT_INPUT, this.#container);

    $(SELECTOR.CAR_NAMES_BUTTON, this.#container).addEventListener(
      'click',
      () => this.onSubmitCarNames(getInputValue(carNamesInput)),
    );
    $(SELECTOR.RACING_COUNT_BUTTON, this.#container).addEventListener(
      'click',
      () => this.onSubmitRacingCount(+getInputValue(racingCountInput)),
    );
    carNamesInput.addEventListener('keyup', ({ key, target }) =>
      getEnterEvent(key, () => this.onSubmitCarNames(target.value)),
    );
    racingCountInput.addEventListener('keyup', ({ key, target }) =>
      getEnterEvent(key, () => this.onSubmitRacingCount(+target.value)),
    );
  }

  onSubmitCarNames(names) {
    const parsedNames = parseCarNames(names);
    if (!isValidCarNameLength(parsedNames)) {
      return alert(MESSAGE.WRONG_NAME_LENGTH);
    }
    if (!isDifferentCarNames(parsedNames)) {
      return alert(MESSAGE.DUPLICATE_NAME);
    }
    this.#props.handleSubmitCarNames(parsedNames);
  }

  onSubmitRacingCount(count) {
    if (!isValidRacingCount(count)) {
      return alert(MESSAGE.WRONG_COUNT);
    }
    if (!isInteger(count)) {
      return alert(MESSAGE.NOT_DECIMAL_COUNT);
    }
    this.#props.handleSubmitRacingCount(count);
  }
}
