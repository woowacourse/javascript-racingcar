import { isValidRacingCount } from "./validation.js";
import Game from "../game/Game.js";
import { EXCEPTIONS } from "../../constants/exceptions.js";
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
      alert(EXCEPTIONS.INVALID_RACE_COUNT);

      return false;
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

  submitRacingCount() {
    if (this.makeRacingCount($("racing-count-input").value)) {
      this.goNextStep();
    }
  }

  addRacingCountInputEnterEvent() {
    $("racing-count-input").addEventListener("keyup", e => {
      if (e.key === "Enter") {
        this.submitRacingCount();
      }
    });
  }

  addRacingCountSubmitButtonClickEvent() {
    $("racing-count-submit").addEventListener("click", () => {
      this.submitRacingCount();
    });
  }
}
