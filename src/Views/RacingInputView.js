import { qs, on, emit } from "../utils/helper.js"

class RacingInputView {
  constructor() {
    this.carNameForm = qs(".car-name-form");
    this.raceCountForm = qs(".race-count-form");
    this.carNameInput = qs(".car-name-input");

    this.raceCountDisplay = qs(".race-count-wrap");
    this.raceCountInput = qs(".race-count-input");
    this.carNameInputButton = qs(".car-name-button");
    this.raceCountInputButton = qs(".race-count-button");

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

  makeDisableForm() {
    this.carNameInputButton.disabled = true;
    this.raceCountInputButton.disabled = true;
  }

  restartRace() {
    this.carNameInput.value = "";
    this.raceCountInput.value = "";
    this.carNameInputButton.disabled = false;
    this.raceCountInputButton.disabled = false;
    this.raceCountDisplay.style.opacity = 0;
  }

}

export default RacingInputView;