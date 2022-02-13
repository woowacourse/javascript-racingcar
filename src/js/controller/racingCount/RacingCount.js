import { isValidRacingCount } from "./checkFunctions.js";
import { game } from "../game/game.js";
import { EXCEPTIONS, KEYBOARD } from "../../util/constants.js";
import {
  racingCountInput,
  racingCountSubmitButton,
} from "../../util/elements.js";

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
      return alert(EXCEPTIONS.INCORRECT_RACING_COUNT);
    }

    this.racingCount = parseInt(racingCountInputValue, 10);

    return true;
  }

  goNextStep() {
    racingCountInput.readOnly = true;
    racingCountSubmitButton.disabled = true;
    game.getResult(this.cars, this.racingCount);
    game.setResult(this.cars);
  }

  addRacingCountInputEnterEvent() {
    racingCountInput.addEventListener("keyup", e => {
      if (
        e.keyCode === KEYBOARD.ENTER &&
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
