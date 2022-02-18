import { qs, on, emit } from "./utils/helper.js"

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
    carList
      .map((car) => this.template.carArrow(car.count))
      .map((arrowTemplate) => {
        const wrap = document.createElement("div");
        wrap.classList.add("racing-arrow-box");
        wrap.innerHTML = arrowTemplate;
        this.racingArrowElement.append(wrap);
      });
  }

  showWinner(winner) {
    this.racingResultElement.innerHTML = this.template.racingResult(winner);
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
  carArrow(eachcount) {
    return `<div class="racing-arrow-wrap">⬇️️</div>`.repeat(eachcount);
  }

  racingResult(winner) {
    return `
      <p class="racing-winner">🏆 최종 우승자: ${winner} 🏆</p>
      <br/>
      <div class='restart-button'>다시 시작하기</div>
    `;
  }
}

export default RacingGameView;
