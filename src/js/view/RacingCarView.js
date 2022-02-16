import { $, $$ } from '../utils/selector.js';
import { ID, CLASS } from '../utils/constants.js';
import { disableElement, enableElement } from '../utils/uiUtils.js';
import {
  makeCarNamesTemplate,
  makeReplayButtonTemplate,
  makeWinnersTemplate,
} from '../template/makeTemplate.js';

export default class RacingCarView {
  constructor() {
    this.$result = $(`#${ID.RESULT}`);
    this.$carNameInput = $(`#${ID.CAR_NAME_INPUT}`);
    this.$racingCountInput = $(`#${ID.RACING_COUNT_INPUT}`);
    this.$carNameButton = $(`#${ID.CAR_NAME_BUTTON}`);
    this.$racingCountButton = $(`#${ID.RACING_COUNT_BUTTON}`);
  }

  bindLoadingDOMs = () => {
    this.$loadings = $$(`.${CLASS.LOADING}`);
  };

  insertTemplate = (template) => {
    this.$result.insertAdjacentHTML('beforeend', template);
  };

  renderCarNames = (carNames) => {
    this.insertTemplate(makeCarNamesTemplate(carNames));
  };

  renderWinners = (winners) => {
    this.insertTemplate(makeWinnersTemplate(winners));
  };

  renderReplayButton = () => {
    this.insertTemplate(makeReplayButtonTemplate());
  };

  renderResults = (stageInfo) => {
    Object.entries(stageInfo).forEach(([name, isMoved]) => {
      this.renderArrow(name, isMoved);
    });
  };

  renderArrow = (name, isMoved) => {
    if (isMoved) {
      Array.from($$(`.${CLASS.CAR_CONTAINER}`))
        .filter((car) => car.dataset.carName === name)[0]
        .querySelector(`.${CLASS.CAR_NAME}`)
        .insertAdjacentHTML('afterend', `<div class=${CLASS.ARROW}>⬇️</div>`);
    }
  };

  removeSpinners = () => {
    this.bindLoadingDOMs();

    this.$loadings.forEach((loading) => {
      loading.remove();
    });
  };

  resetGame = () => {
    this.$result.innerHTML = '';
    this.$carNameInput.value = '';
    this.$racingCountInput.value = '';
  };

  alertCongratulationMessage = (winnerMessage) => {
    alert(winnerMessage);
  };

  disableCarName = () => {
    disableElement(this.$carNameInput, this.$carNameButton);
  };

  disableRacingCount = () => {
    disableElement(this.$racingCountInput, this.$racingCountButton);
  };

  enableCarName = () => {
    enableElement(this.$carNameInput, this.$carNameButton);
  };

  enableRacingCount = () => {
    enableElement(this.$racingCountInput, this.$racingCountButton);
  };
}
