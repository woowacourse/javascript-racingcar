import { qs, on, emit, qsAll } from "../utils/helper.js"

class RacingGameView {
  constructor() {
    this.template = new Template();

    this.carNameForm = qs(".car-name-form");
    this.raceCountForm = qs(".race-count-form");
    this.carNameInput = qs(".car-name-input");
    this.raceCountInput = qs(".race-count-input");
    this.carNameInputButton = qs(".car-name-button");
    this.raceCountInputButton = qs(".race-count-button");

    this.racingResultElement = qs(".racing-result");
    this.raceCountDisplay = qs(".race-count-wrap");
    this.racingArrowElement = qs(".racing-arrow");
    this.racingCarsElement = qs(".racing-cars");
    this.raceCountDisplay.style.opacity = 0;

    this.bindEvent();

  }

  bindEvent() {
    on(this.carNameForm, "submit", (event) => this.handleCarNameForm(event));
    on(this.raceCountForm, "submit", (event) => this.handleRaceCountForm(event));
  }

  handleCarNameForm(event) {
    event.preventDefault();
    const value = this.carNameInput.value;
    emit(this.carNameForm, "@carName", value);
  }

  handleRaceCountForm(event) {
    event.preventDefault();
    const value = this.raceCountInput.value;
    emit(this.raceCountForm, "@raceCount", value);
  }

  showRaceCountForm() {
    this.raceCountDisplay.style.opacity = 0.99;
  }

  showCarBoxes(carList) {
    this.racingCarsElement.innerHTML = carList
      .map((car) => car.carNameTemplate)
      .join("");
  }

  showCarsMove(carList) {
    this.carMove = carList.map((v) => v.count);
    this.max = Math.max(...this.carMove);
    this.carArrowBox = qsAll(".car-arrow-box");
    this.num = 0;
    this.carRaceInterval = setInterval(() => this.carRace(), 1000);
  }

  carRace() {
    this.num++;
    for (let j = 0; j < this.carMove.length; j++) {
      if (this.carMove[j] >= this.num) {
        this.carArrowBox[j].insertAdjacentHTML("afterbegin", `<div class="racing-arrow-wrap">⬇️️</div>`);
      } 
      if (this.num === this.max) {
        const spinner = qsAll(".spinner");
        spinner.map((v) => v.style.opacity = 0);
        clearInterval(this.carRaceInterval);
      }
    }
  }

  showWinner(winner) {
    this.racingResultElement.innerHTML = this.template.racingResult(winner);
    this.racingResultElement.style.opacity = 0;
    setTimeout(() => this.showWinnerResult(), this.max * 1000);
    setTimeout(() => this.showWinnerAlert(), this.max * 1000 + 2000);
  }

  showWinnerResult() {
    this.racingResultElement.style.opacity = 0.99;
  }

  showWinnerAlert() {
    alert("축하합니다.");
  }

  makeDisableForm() {
    this.carNameInputButton.disabled = true;
    this.raceCountInputButton.disabled = true;
  }

  bindRestartEvent() {
    this.restartButton = qs(".restart-button");
    on(this.restartButton, "click", () => this.handleRestartRace());
  }

  handleRestartRace() {
    emit(this.restartButton, "@restartGame", "");
  }

  restartRace() {
    this.racingCarsElement.innerHTML = "";
    this.racingArrowElement.innerHTML = "";
    this.racingResultElement.innerHTML = "";
    this.carNameInput.value = "";
    this.raceCountInput.value = "";
    this.carNameInputButton.disabled = false;
    this.raceCountInputButton.disabled = false;
    this.raceCountDisplay.style.opacity = 0;
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

export default RacingGameView;
