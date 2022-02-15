import { isValidRacingCount } from "./validation.js";
import Game from "../game/Game.js";
import { EXCEPTIONS } from "../../constants/exceptions.js";
import { KEYBOARD_ENTER } from "../../constants/events.js";
import { $ } from "../../view/getElement.js";

export default class RacingCount {
  constructor(carManager) {
    this.init();
    this.addRacingCountInputEnterEvent();
    this.addRacingCountSubmitButtonClickEvent();
    this.carManager = carManager;
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
    $("racing-count-input").readOnly = true;
    $("racing-count-submit").disabled = true;
    Game.getResult(this.carManager, this.racingCount);
    Game.setResult(this.carManager);
  }

  addRacingCountInputEnterEvent() {
    $("racing-count-input").addEventListener("keyup", e => {
      if (
        e.keyCode === KEYBOARD_ENTER &&
        this.makeRacingCount($("racing-count-input").value)
      ) {
        this.goNextStep();
      }
    });
  }

  addRacingCountSubmitButtonClickEvent() {
    $("racing-count-submit").addEventListener("click", () => {
      if (this.makeRacingCount($("racing-count-input").value)) {
        this.goNextStep();
      }
    });
  }
}
