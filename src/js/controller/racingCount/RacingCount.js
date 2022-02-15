import { isValidRacingCount } from "./checkFunctions.js";
import Game from "../game/Game.js";
import { EVENT, EXCEPTIONS, KEYBOARD } from "../../constants.js";
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
      return alert(EXCEPTIONS.INCORRECT_RACING_COUNT);
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
    racingCountInput.addEventListener(EVENT.KEYUP, e => {
      if (
        e.keyCode === KEYBOARD.ENTER &&
        this.makeRacingCount(racingCountInput.value)
      ) {
        this.goNextStep();
      }
    });
  }

  addRacingCountSubmitButtonClickEvent() {
    racingCountSubmitButton.addEventListener(EVENT.CLICK, () => {
      if (this.makeRacingCount(racingCountInput.value)) {
        this.goNextStep();
      }
    });
  }
}
