import { isValidRacingCount } from "./checkFunctions.js";
import Game from "../game/Game.js";
import { EXCEPTIONS } from "../../constants/exceptions.js";
import { KEYBOARD_ENTER } from "../../constants/events.js";
import { racingCountInput, racingCountSubmitButton } from "../../elements.js";

export default class RacingCount {
  constructor(cars) {
    this.init();
    this.addRacingCountInputEnterEvent();
    this.addRacingCountSubmitButtonClickEvent();
    this.cars = cars;
  }

  init() {
    this.racingCount = 0;
  }

  makeRacingCount(racingCountInputValue) {
    if (!racingCountInputValue || !isValidRacingCount(racingCountInputValue)) {
      return alert(EXCEPTIONS.INVALID_RACE_COUNT);
    }

    this.racingCount = parseInt(racingCountInputValue, 10);

    return true;
  }

  goNextStep() {
    racingCountInput.readOnly = true;
    racingCountSubmitButton.disabled = true;
    Game.getResult(this.cars, this.racingCount);
    Game.setResult(this.cars);
  }

  addRacingCountInputEnterEvent() {
    racingCountInput.addEventListener("keyup", e => {
      if (
        e.keyCode === KEYBOARD_ENTER &&
        this.makeRacingCount(racingCountInput.value)
      ) {
        this.goNextStep();
      }
    });
  }

  addRacingCountSubmitButtonClickEvent() {
    racingCountSubmitButton.addEventListener("click", () => {
      if (this.makeRacingCount(racingCountInput.value)) {
        this.goNextStep();
      }
    });
  }
}
