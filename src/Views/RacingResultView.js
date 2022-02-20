import { qs, on, emit } from "../utils/helper.js"

class RacingResultView {
  constructor() {
    this.template = new Template();

    this.racingResultElement = qs(".racing-result");

  }

  showWinner(carMaxRace, winner) {
    this.racingResultElement.innerHTML = this.template.racingResult(winner);
    this.racingResultElement.style.opacity = 0;
    setTimeout(() => this.showWinnerResult(), carMaxRace * 1000);
    setTimeout(() => this.showWinnerAlert(), carMaxRace * 1000 + 2000);
  }

  showWinnerResult() {
    this.racingResultElement.style.opacity = 0.99;
  }

  showWinnerAlert() {
    alert("축하합니다.");
  }

  bindRestartEvent() {
    this.restartButton = qs(".restart-button");
    on(this.restartButton, "click", () => this.handleRestartRace());
  }

  handleRestartRace() {
    emit(this.restartButton, "@restartGame", "");
  }

}

class Template {
  racingResult(winner) {
    return `
      <p class="racing-winner">🏆 최종 우승자: ${winner} 🏆</p>
      <br/>
      <div class='restart-button'>다시 시작하기</div>
    `;
  }
}

export default RacingResultView;