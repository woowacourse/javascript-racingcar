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

const moveArrowView = `<h3 id="move-arrow" class="move-arrow" data-status="${CAR_STATUS.MOVE}">⬇️</h3>`;
const spinnerView = `<div class="spinner" data-status="${CAR_STATUS.STAY}"></div>`;

const generateCarInformationView = ({ name }) => `
<div id="car-information" class="car-information" data-name=${name}>
    <div id="car-name" class="car-name">${name}</div>
    <div id="progress" class="progress"></div>
</div>`;

const generateRacingStatusView = cars =>
  cars.map(generateCarInformationView).join('');

const generateWinnersView = winners =>
  `<h3 id="winners">🏆최종 우승자: ${winners
    .map(({ name }) => name)
    .join(',')}🏆</h3>`;

export default class View {
  constructor() {
    this.$carNamesInput = $(SELECTOR.CAR_NAMES_INPUT);
    this.$carNamesButton = $(SELECTOR.CAR_NAMES_BUTTON);
    this.$racingCountInput = $(SELECTOR.RACING_COUNT_INPUT);
    this.$racingCountButton = $(SELECTOR.RACING_COUNT_BUTTON);
    this.$racingCountContainer = $(SELECTOR.RACING_COUNT_CONTAINER);
    this.$racingStatusContainer = $(SELECTOR.RACING_STATUS_CONTAINER);
    this.$racingResultContainer = $(SELECTOR.RACING_RESULT_CONTAINER);
    this.$winnersContainer = $(SELECTOR.WINNERS_CONTAINER);
    this.racingProgressElements = [];
  }

  showRacingCountInput() {
    disableElement(this.$carNamesInput);
    disableElement(this.$carNamesButton);
    removeClass(this.$racingCountContainer, CLASS_NAME.HIDDEN);
  }

  renderRacingStatus(cars) {
    disableElement(this.$racingCountInput);
    disableElement(this.$racingCountButton);
    removeClass(this.$racingStatusContainer, CLASS_NAME.HIDDEN);
    setHTML(this.$racingStatusContainer, generateRacingStatusView(cars));
  }

  removeSpinners() {
    this.racingProgressElements.forEach(element => {
      const { lastChild } = element;
      if (lastChild && lastChild.dataset.status === CAR_STATUS.STAY) {
        element.removeChild(lastChild);
      }
    });
  }

  renderSpinners() {
    if (!this.racingProgressElements.length)
      this.racingProgressElements = $$(
        SELECTOR.RACING_PROGRESS,
        this.$racingStatusContainer,
      );
    this.racingProgressElements.forEach(element => {
      const { lastChild } = element;
      if (!lastChild || lastChild.dataset.status === CAR_STATUS.MOVE) {
        appendHTML(element, spinnerView);
      }
    });
  }

  renderRacingProgress(carInformations) {
    this.racingProgressElements.forEach(element => {
      const isMoved = carInformations.get(element.parentNode.dataset.name);
      const { lastChild } = element;
      if (isMoved && lastChild.dataset.status === CAR_STATUS.STAY) {
        element.removeChild(lastChild);
        appendHTML(element, moveArrowView);
      }
    });
  }

  renderWinners(winners) {
    removeClass(this.$racingResultContainer, CLASS_NAME.HIDDEN);
    setHTML(this.$winnersContainer, generateWinnersView(winners));
  }

  restartGame() {
    enableElement(this.$carNamesInput);
    enableElement(this.$carNamesButton);
    resetInputValue(this.$carNamesInput);

    enableElement(this.$racingCountInput);
    enableElement(this.$racingCountButton);
    resetInputValue(this.$racingCountInput);

    clearHTML(this.$racingStatusContainer);
    clearHTML(this.$winnersContainer);

    addClass(this.$racingCountContainer, CLASS_NAME.HIDDEN);
    addClass(this.$racingStatusContainer, CLASS_NAME.HIDDEN);
    addClass(this.$racingResultContainer, CLASS_NAME.HIDDEN);

    this.racingProgressElements = [];
  }

  endGame(winners) {
    this.removeSpinners();
    this.renderWinners(winners);
  }
}
