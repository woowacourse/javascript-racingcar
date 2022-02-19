import {
  $,
  $$,
  disableElement,
  enableElement,
  addClass,
  removeClass,
  resetInputValue,
  clearHTML,
  setHTML,
  appendHTML,
} from '../utils/dom.js';
import { SELECTOR, CLASS_NAME, CAR_STATUS } from '../constants.js';

const moveArrowView = `<h3 id="move-arrow" data-status="${CAR_STATUS.MOVE}">⬇️</h3>`;
const spinnerView = `<div id="spinner" class="spinner" data-status="${CAR_STATUS.STAY}"></div>`;

const generateCarInformationView = car => {
  const name = car.getName();
  return `
    <div id="car-information" class="information-wrapper" data-name=${name}>
        <div id="car-name" class="name-wrapper">${name}</div>
        <div id="progress" class="progress-wrapper"></div>
    </div>`;
};

const generateRacingStatusView = cars =>
  cars.map(generateCarInformationView).join('');

const generateWinnersView = winners =>
  `<h3 id="winners">🏆최종 우승자: ${winners
    .map(winner => winner.getName())
    .join(',')}🏆</h3>`;

export default class View {
  #carNamesInput;
  #carNamesButton;
  #racingCountInput;
  #racingCountButton;
  #racingCountContainer;
  #racingStatusContainer;
  #racingResultContainer;
  #winnersContainer;
  #racingProgressElements = [];

  constructor($app) {
    this.#carNamesInput = $(SELECTOR.CAR_NAMES_INPUT, $app);
    this.#carNamesButton = $(SELECTOR.CAR_NAMES_BUTTON, $app);
    this.#racingCountInput = $(SELECTOR.RACING_COUNT_INPUT, $app);
    this.#racingCountButton = $(SELECTOR.RACING_COUNT_BUTTON, $app);
    this.#racingCountContainer = $(SELECTOR.RACING_COUNT_CONTAINER, $app);
    this.#racingStatusContainer = $(SELECTOR.RACING_STATUS_CONTAINER, $app);
    this.#racingResultContainer = $(SELECTOR.RACING_RESULT_CONTAINER, $app);
    this.#winnersContainer = $(SELECTOR.WINNERS_CONTAINER, $app);
  }

  showRacingCountInput() {
    disableElement(this.#carNamesInput);
    disableElement(this.#carNamesButton);
    removeClass(this.#racingCountContainer, CLASS_NAME.HIDDEN);
  }

  renderRacingStatus(cars) {
    disableElement(this.#racingCountInput);
    disableElement(this.#racingCountButton);
    removeClass(this.#racingStatusContainer, CLASS_NAME.HIDDEN);
    setHTML(this.#racingStatusContainer, generateRacingStatusView(cars));
  }

  removeSpinners() {
    this.#racingProgressElements.forEach(element => {
      const { lastChild } = element;
      if (lastChild && lastChild.dataset.status === CAR_STATUS.STAY) {
        element.removeChild(lastChild);
      }
    });
  }

  renderSpinners() {
    if (!this.#racingProgressElements.length)
      this.#racingProgressElements = $$(
        SELECTOR.RACING_PROGRESS,
        this.#racingStatusContainer,
      );
    this.#racingProgressElements.forEach(element => {
      const { lastChild } = element;
      if (!lastChild || lastChild.dataset.status === CAR_STATUS.MOVE) {
        appendHTML(element, spinnerView);
      }
    });
  }

  renderRacingProgress(carInformations) {
    this.#racingProgressElements.forEach(element => {
      const isMoved = carInformations.get(element.parentNode.dataset.name);
      const { lastChild } = element;
      if (isMoved && lastChild.dataset.status === CAR_STATUS.STAY) {
        element.removeChild(lastChild);
        appendHTML(element, moveArrowView);
      }
    });
  }

  renderWinners(winners) {
    removeClass(this.#racingResultContainer, CLASS_NAME.HIDDEN);
    setHTML(this.#winnersContainer, generateWinnersView(winners));
  }

  restartGame() {
    enableElement(this.#carNamesInput);
    enableElement(this.#carNamesButton);
    resetInputValue(this.#carNamesInput);

    enableElement(this.#racingCountInput);
    enableElement(this.#racingCountButton);
    resetInputValue(this.#racingCountInput);

    clearHTML(this.#racingStatusContainer);
    clearHTML(this.#winnersContainer);

    addClass(this.#racingCountContainer, CLASS_NAME.HIDDEN);
    addClass(this.#racingStatusContainer, CLASS_NAME.HIDDEN);
    addClass(this.#racingResultContainer, CLASS_NAME.HIDDEN);

    this.#racingProgressElements = [];
  }

  endGame(winners) {
    this.removeSpinners();
    this.renderWinners(winners);
  }
}
