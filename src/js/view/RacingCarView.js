import { $ } from "../utils/selector.js";
import { ID, CLASS, winnerMesssage } from "../utils/constants.js";

export default class RacingCarView {
  constructor() {
    this.result = [];
    this.$result = $(ID.RESULT);
    this.$carNameInput = $(ID.CAR_NAME_INPUT);
    this.$racingCountInput = $(ID.RACING_COUNT_INPUT);
    this.$carNameButton = $(ID.CAR_NAME_BUTTON);
    this.$racingCountButton = $(ID.RACING_COUNT_BUTTON);
  }

  setResult = (result) => {
    this.result = result;
  };

  renderResult = () => {
    this.$result.innerHTML = this.makeResultTemplate();
  };

  makeResultTemplate = () => {
    const template = `
      <div class="${CLASS.RACING_RESULTS}">
        ${this.result
          .map(
            (result) =>
              `<div class="${CLASS.RACING_RESULT}">
                <div class="${CLASS.CAR_NAME}">${result.name}</div> 
                ${`<div class="${CLASS.ARROW}">⬇️️</div>`.repeat(
                  result.forward
                )}
              </div>`
          )
          .join("")}
      </div>
      `;
    return template;
  };

  renderWinners = (winners) => {
    this.$result.insertAdjacentHTML(
      "beforeend",
      this.makeWinnersTemplate(winners)
    );
  };

  makeWinnersTemplate = (winners) => {
    const template = ` 
      <div>
        <h3 class="${CLASS.WINNERS}">${winnerMesssage(winners)}</h3>
      </div>
    `;
    return template;
  };

  renderReplayButton = () => {
    this.$result.insertAdjacentHTML(
      "beforeend",
      this.makeReplayButtonTemplate()
    );
  };

  makeReplayButtonTemplate = () => {
    const template = `
      <button class="${CLASS.BTN} ${CLASS.REPLAY_BTN}" id="${ID.REPLAY_BUTTON}">다시 시작하기</button>
    `;
    return template;
  };

  resetGame = () => {
    this.$result.innerHTML = "";
    this.$carNameInput.value = "";
    this.$racingCountInput.value = "";
  };

  disableCarName = () => {
    this.$carNameInput.disabled = true;
    this.$carNameButton.disabled = true;
  };

  disableRacingCount = () => {
    this.$racingCountInput.disabled = true;
    this.$racingCountButton.disabled = true;
  };

  enableCarName = () => {
    this.$carNameInput.disabled = false;
    this.$carNameButton.disabled = false;
  };

  enableRacingCount = () => {
    this.$racingCountInput.disabled = false;
    this.$racingCountButton.disabled = false;
  };
}
