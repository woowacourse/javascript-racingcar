export default class RacingCarView {
  constructor() {
    this.result = [];
    this.$result = document.querySelector("#result");
    this.$carNameInput = document.querySelector("#car-names-input");
    this.$racingCountInput = document.querySelector("#racing-count-input");
    this.$carNameButton = document.querySelector("#car-names-button");
    this.$racingCountButton = document.querySelector("#racing-count-button");
  }

  setResult = (result) => {
    this.result = result;
  };

  renderResult = () => {
    this.$result.innerHTML = this.makeResultTemplate();
  };

  makeResultTemplate = () => {
    const template = `
      <div class="racing-results">
        ${this.result
          .map(
            (result) =>
              `<div class="racing-result">
                <div class="car-name">${result.name}</div> 
                ${"<div class=arrow>⬇️️</div>".repeat(result.forward)}
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
        <h3 class="winners">🏆 최종 우승자: ${winners} 🏆</h3>
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
      <button id="replay-button">다시 시작하기</button>
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
