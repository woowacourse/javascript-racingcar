import { SELECTOR, CLASS_NAME } from '../constants.js';
import {
  $,
  disableElement,
  enableElement,
  addClass,
  removeClass,
  resetInputValue,
} from '../utils/dom.js';

export default class FormView {
  #carNamesInput;
  #carNamesButton;
  #racingCountInput;
  #racingCountButton;
  #racingCountContainer;

  constructor() {
    const container = $(SELECTOR.RACING_GAME_FORM);
    this.#carNamesInput = $(SELECTOR.CAR_NAMES_INPUT, container);
    this.#carNamesButton = $(SELECTOR.CAR_NAMES_BUTTON, container);
    this.#racingCountInput = $(SELECTOR.RACING_COUNT_INPUT, container);
    this.#racingCountButton = $(SELECTOR.RACING_COUNT_BUTTON, container);
    this.#racingCountContainer = $(SELECTOR.RACING_COUNT_CONTAINER, container);
  }

  showRacingCountInput() {
    disableElement(this.#carNamesInput);
    disableElement(this.#carNamesButton);
    removeClass(this.#racingCountContainer, CLASS_NAME.HIDDEN);
  }

  renderRacingStatus() {
    disableElement(this.#racingCountInput);
    disableElement(this.#racingCountButton);
  }

  restartGame() {
    enableElement(this.#carNamesInput);
    enableElement(this.#carNamesButton);
    resetInputValue(this.#carNamesInput);

    enableElement(this.#racingCountInput);
    enableElement(this.#racingCountButton);
    resetInputValue(this.#racingCountInput);
    addClass(this.#racingCountContainer, CLASS_NAME.HIDDEN);
  }
}
