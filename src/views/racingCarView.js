import { $ } from "../dom/dom.js";
export default class RacingCarView {
  renderRacingContent(racingGameInfo) {
    const carElement = racingGameInfo.carNameArray
      .map((name, index) => {
        return `<div class="car">
                <label>${name}</label>
                <div class="car-${index} step-container">
                ${this.renderStepContainer(index, racingGameInfo)}
                </div>
                </div>`;
      })
      .join("");
    $(".racing-content").insertAdjacentHTML("afterbegin", carElement);
  }
  renderStepContainer(index, racingGameInfo) {
    return `<p class="step-${index}"></p>`.repeat(racingGameInfo.raceCount);
  }
  renderSpinningEvent(count, index) {
    if (
      document.querySelectorAll(`.step-${index}`)[count].textContent != "⬇️"
    ) {
      document
        .querySelectorAll(`.step-${index}`)
        [count].classList.add("is-loading");
    }
  }
  renderArrowContent(count, index) {
    for (let i = 0; i < count; i++) {
      document
        .querySelectorAll(`.step-${index}`)
        [count].classList.remove("is-loading");
      document.querySelectorAll(`.step-${index}`)[count].textContent = "⬇️";
    }
  }
  renderGameWinners(winners) {
    const winnerElement = `
          <h2 class="result-text">🏆 최종 우승자: ${winners}🏆</h2>
          <button class="restart-button">다시 시작하기</button>
          `;
    $(".racing-result").insertAdjacentHTML("afterbegin", winnerElement);
  }
}
