import {
  $,
  $$,
  addClass,
  removeClass,
  resetInputValue,
  clearHTML,
  setHTML,
} from '../utils/dom.js';
import { SELECTOR, CLASS_NAME } from '../constants.js';

const generateMoveView = isMoved => {
  if (isMoved) return '<h3 id="move" class="move" data-status="move">⬇️</h3>';
  return '<div class="spinner" data-status="stay"></div>';
};

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

  hideRacingCountInput() {
    addClass(this.$racingCountContainer, CLASS_NAME.HIDDEN);
  }

  showRacingStatus() {
    removeClass(this.$racingStatusContainer, CLASS_NAME.HIDDEN);
  }

  hideRacingStatus() {
    addClass(this.$racingStatusContainer, CLASS_NAME.HIDDEN);
  }

  showRacingResult() {
    removeClass(this.$racingResultContainer, CLASS_NAME.HIDDEN);
  }

  hideRacingResult() {
    addClass(this.$racingResultContainer, CLASS_NAME.HIDDEN);
  }

  restartGame() {
    resetInputValue(this.$carNamesInput);
    resetInputValue(this.$racingCountInput);
    clearHTML(this.$racingStatusContainer);
    clearHTML(this.$winnersContainer);
    this.hideRacingCountInput();
    this.hideRacingStatus();
    this.hideRacingResult();
  }

  renderRacingStatus(cars) {
    this.showRacingStatus();
    setHTML(this.$racingStatusContainer, generateRacingStatusView(cars));
  }

  removeSpinners() {
    $$(SELECTOR.MOVE_STATUS, this.$racingStatusContainer).forEach(element => {
      const { lastChild } = element;
      if (lastChild && lastChild.dataset.status === 'stay') {
        element.removeChild(lastChild);
      }
    });
  }

  renderSpinners() {
    $$(SELECTOR.MOVE_STATUS, this.$racingStatusContainer).forEach(element => {
      const { lastChild } = element;
      if (!lastChild || lastChild.dataset.status === 'move') {
        element.insertAdjacentHTML('beforeend', generateMoveView(false));
      }
    });
  }

  renderMoveStatus(carInformation) {
    carInformation.forEach(({ name, isMoved }) => {
      const moveElement = $(
        SELECTOR.MOVE_STATUS,
        $(`[data-name="${name}"]`, this.$racingStatusContainer),
      );
      const { lastChild } = moveElement;

      if (isMoved && lastChild.dataset.status === 'stay') {
        moveElement.removeChild(lastChild);
        moveElement.insertAdjacentHTML('beforeend', generateMoveView(isMoved));
      }
    });
  }

  renderWinners(winners) {
    this.showRacingResult();
    setHTML(this.$winnersContainer, generateWinnersView(winners));
  }
}
