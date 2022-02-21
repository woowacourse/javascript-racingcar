import { $ } from "../dom/dom.js";
export default class RacingCarView {
  renderRacingContent(racingGameInfo) {
    racingGameInfo.carNameArray.forEach((name, index) => {
      const carContainer = document.createElement("div");
      carContainer.className = "car";

      const carNameLabel = document.createElement("label");
      carNameLabel.textContent = name;

      const stepContainer = document.createElement("div");
      stepContainer.classList.add("step-container");
      stepContainer.classList.add(`car-${index}`);

      carContainer.appendChild(carNameLabel);
      this.renderStepContainer(stepContainer, index, racingGameInfo);
      carContainer.appendChild(stepContainer);

      $(".racing-content").appendChild(carContainer);
    });
  }

  renderStepContainer(element, index, racingGameInfo) {
    for (let i = 0; i < racingGameInfo.raceCount; i++) {
      const step = document.createElement("p");
      step.className = `step-${index}`;
      element.appendChild(step);
    }
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
