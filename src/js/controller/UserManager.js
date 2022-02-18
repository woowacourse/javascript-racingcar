import { isValidRacingCount } from "./racingCount/validation.js";
import GameManager from "./GameManager.js";
import { EXCEPTIONS } from "../constants/exceptions.js";
import { $ } from "../view/getElement.js";

// TODO : 사용자의 입력을 저장하고 관리
export default class UserManager {
  constructor(carManager, gameManager) {
    this.racingCount = 0;
    this.carManager = carManager;
    this.gameManager = gameManager;
    this.addSubmitRacingCountEventListener();
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
    GameManager.getResult(this.carManager, this.racingCount);
    GameManager.setResult(this.carManager);
  }

  submitRacingCount() {
    if (this.makeRacingCount($("racing-count-input").value)) {
      this.goNextStep();
    }
  }

  addSubmitRacingCountEventListener() {
    $("racing-count-input").addEventListener("keyup", e => {
      if (e.key === "Enter") {
        this.submitRacingCount();
      }
    });

    $("racing-count-submit").addEventListener("click", () => {
      this.submitRacingCount();
    });
  }
}
