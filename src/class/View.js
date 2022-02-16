import {
  $,
  $$,
  addClass,
  removeClass,
  resetInputValue,
  clearHTML,
  setHTML,
  appendHTML,
} from '../utils/dom.js';
import { SELECTOR, CLASS_NAME, CAR_STATUS } from '../constants.js';

const movedArrowView = `<h3 id="move" class="move" data-status="${CAR_STATUS.MOVE}">⬇️</h3>`;
const spinnerView = `<div class="spinner" data-status="${CAR_STATUS.STAY}"></div>`;

const generateCarStatusView = ({ name }) => `
<div id="car-status" class="car-status" data-name=${name}>
    <div id="car-name" class="car-name">${name}</div>
    <div id="move-status" class="move-status"></div>
</div>`;

const generateRacingStatusView = cars =>
  cars.map(generateCarStatusView).join('');

const generateWinnersView = winners =>
  `<h3 id="winners">🏆최종 우승자: ${winners
    .map(({ name }) => name)
    .join(',')}🏆</h3>`;

export default class View {
  constructor() {
    this.$carNamesInput = $(SELECTOR.CAR_NAMES_INPUT);
    this.$racingCountInput = $(SELECTOR.RACING_COUNT_INPUT);
    this.$racingCountContainer = $(SELECTOR.RACING_COUNT_CONTAINER);
    this.$racingStatusContainer = $(SELECTOR.RACING_STATUS);
    this.$racingResultContainer = $(SELECTOR.RACING_RESULT);
    this.$winnersContainer = $(SELECTOR.RACING_WINNERS);
  }

  showRacingCountInput() {
    removeClass(this.$racingCountContainer, CLASS_NAME.HIDDEN);
  }

  restartGame() {
    resetInputValue(this.$carNamesInput);
    resetInputValue(this.$racingCountInput);
    clearHTML(this.$racingStatusContainer);
    clearHTML(this.$winnersContainer);
    addClass(this.$racingCountContainer, CLASS_NAME.HIDDEN);
    addClass(this.$racingStatusContainer, CLASS_NAME.HIDDEN);
    addClass(this.$racingResultContainer, CLASS_NAME.HIDDEN);
  }

  renderRacingStatus(cars) {
    removeClass(this.$racingStatusContainer, CLASS_NAME.HIDDEN);
    setHTML(this.$racingStatusContainer, generateRacingStatusView(cars));
  }

  removeSpinners() {
    $$(SELECTOR.MOVE_STATUS, this.$racingStatusContainer).forEach(element => {
      const { lastChild } = element;
      if (lastChild && lastChild.dataset.status === CAR_STATUS.STAY) {
        element.removeChild(lastChild);
      }
    });
  }

  renderSpinners() {
    $$(SELECTOR.MOVE_STATUS, this.$racingStatusContainer).forEach(element => {
      const { lastChild } = element;
      if (!lastChild || lastChild.dataset.status === CAR_STATUS.MOVE) {
        appendHTML(element, spinnerView);
      }
    });
  }

  renderMoveStatus(carInformation) {
    carInformation.forEach(({ name, isMoved }) => {
      const element = $(
        SELECTOR.MOVE_STATUS,
        $(`[data-name="${name}"]`, this.$racingStatusContainer),
      );
      const { lastChild } = element;

      if (isMoved && lastChild.dataset.status === CAR_STATUS.STAY) {
        element.removeChild(lastChild);
        appendHTML(element, movedArrowView);
      }
    });
  }

  renderWinners(winners) {
    removeClass(this.$racingResultContainer, CLASS_NAME.HIDDEN);
    setHTML(this.$winnersContainer, generateWinnersView(winners));
  }
}
