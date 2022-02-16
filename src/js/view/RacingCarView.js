import { $ } from '../utils/selector.js';
import { ID, CLASS, winnerMesssage } from '../utils/constants.js';

export default class RacingCarView {
  constructor() {
    this.$result = $(`#${ID.RESULT}`);
    this.$carNameInput = $(`#${ID.CAR_NAME_INPUT}`);
    this.$racingCountInput = $(`#${ID.RACING_COUNT_INPUT}`);
    this.$carNameButton = $(`#${ID.CAR_NAME_BUTTON}`);
    this.$racingCountButton = $(`#${ID.RACING_COUNT_BUTTON}`);
  }

  insertTemplate = template => {
    this.$result.insertAdjacentHTML('beforeend', template);
  };

  renderCarNames = carNames => {
    this.insertTemplate(this.makeCarNamesTemplate(carNames));
  };

  renderResult = stageInfo => {
    Object.entries(stageInfo).forEach(([name, isMoved]) => {
      if (isMoved) {
        $(`#${name}-container`)
          .querySelector(`.${CLASS.CAR_NAME}`)
          .insertAdjacentHTML('afterend', `<div class=${CLASS.ARROW}>⬇️</div>`);
      }
    });
  };

  makeCarNamesTemplate = carNames => `
    <div class="${CLASS.RACING_RESULTS}">
      ${carNames
        .map(
          carName => `
          <div id="${carName}-container" class=${CLASS.RACING_INFO}>
            <div class="${CLASS.CAR_NAME}">${carName}</div>
            <div class=${CLASS.LOADING}><div class=${CLASS.SPINNER}></div></div>
          </div>
        `,
        )
        .join('')}
    </div>
    `;

  removeSpinners = () => {
    document.querySelectorAll(`.${CLASS.LOADING}`).forEach(loading => {
      loading.remove();
    });
  };

  renderWinners = winners => {
    this.insertTemplate(this.makeWinnersTemplate(winners));
  };

  makeWinnersTemplate = winners => `
      <div>
        <h3 class="${CLASS.WINNERS}">${winnerMesssage(winners)}</h3>
      </div>
    `;

  renderReplayButton = () => {
    this.insertTemplate(this.makeReplayButtonTemplate());
  };

  makeReplayButtonTemplate = () => `
      <button class="${CLASS.BTN} ${CLASS.REPLAY_BTN}" id="${ID.REPLAY_BUTTON}">다시 시작하기</button>
    `;

  resetGame = () => {
    this.$result.innerHTML = '';
    this.$carNameInput.value = '';
    this.$racingCountInput.value = '';
  };

  alertCongratulationMessage = winnerMessage => {
    alert(winnerMessage);
  };

  disableElement = (...args) => {
    args.forEach(arg => (arg.disabled = true));
  };

  enableElement = (...args) => {
    args.forEach(arg => (arg.disabled = false));
  };

  disableCarName = () => {
    this.disableElement(this.$carNameInput, this.$carNameButton);
  };

  disableRacingCount = () => {
    this.disableElement(this.$racingCountInput, this.$racingCountButton);
  };

  enableCarName = () => {
    this.enableElement(this.$carNameInput, this.$carNameButton);
  };

  enableRacingCount = () => {
    this.enableElement(this.$racingCountInput, this.$racingCountButton);
  };
}
