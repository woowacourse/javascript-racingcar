import { EVENT, EXCEPTIONS, RACING_COUNT } from "../../util/constants.js";
import {
  racingCountInput,
  racingCountSubmitButton,
} from "../../util/elements.js";
import { isInteger } from "./checkFunctions.js";
import Game from "../game/game.js";

export default class RacingCount {
  constructor(cars) {
    this.init();
    this.addRacingCountSubmitButtonClickEvent();
    this.cars = cars;
  }

  init() {
    this.racingCount = 0;
  }

  isValidRacingCount(racingCountInput) {
    if (
      !isInteger(racingCountInput) ||
      parseInt(racingCountInput) < RACING_COUNT.MIN
    ) {
      return false;
    }
    return true;
  }

  addRacingCountSubmitButtonClickEvent() {
    racingCountSubmitButton.addEventListener(EVENT.CLICK, () => {
      if (
        !racingCountInput.value ||
        !this.isValidRacingCount(racingCountInput.value)
      ) {
        return alert(EXCEPTIONS.INCORRECT_RACING_COUNT);
      }
      this.racingCount = parseInt(racingCountInput.value);
      racingCountInput.readOnly = true;
      racingCountSubmitButton.disabled = true;

      Game.getResult(this.cars, this.racingCount);
      Game.setResult(this.cars);
    });
  }
}
