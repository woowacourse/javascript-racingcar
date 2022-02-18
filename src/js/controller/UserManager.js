import { $ } from "../view/getElement.js";
import {
  disableCountInputForm,
  enableCountInputForm,
} from "../view/countView.js";
import { CarNameValidation, RacingCountValidation } from "./Validate.js";
import { EXCEPTIONS } from "../constants/exceptions.js";
import { trimArray } from "../utils/trimArray.js";

// TODO : 사용자의 입력에 대한 처리
export default class UserManager {
  constructor(carManager, gameManager) {
    this.carManager = carManager;
    this.gameManager = gameManager;
    this.addSubmitEventListener();
  }

  submitCarNames() {
    const carNamesArray = trimArray($("car-names-input").value.split(","));

    if (!CarNameValidation.isValidLengthAll(carNamesArray)) {
      alert(EXCEPTIONS.INVALID_CAR_NAME_LENGTH);
      return;
    }
    if (CarNameValidation.isDuplicatedName(carNamesArray)) {
      alert(EXCEPTIONS.DUPLICATED_CAR);
      return;
    }

    this.carManager.createCars(carNamesArray);
    enableCountInputForm();
  }

  submitRacingCount() {
    const racingCount = $("racing-count-input").valueAsNumber;

    if (
      !RacingCountValidation.isValidRange(racingCount) ||
      !Number.isInteger(racingCount)
    ) {
      alert(EXCEPTIONS.INVALID_RACE_COUNT);
      return;
    }

    this.gameManager.getResult(this.carManager, racingCount);
    this.gameManager.setResult(this.carManager);
    disableCountInputForm();
  }

  addSubmitEventListener() {
    this.addCarNamesSubmitEventListener();
    this.addSubmitRacingCountEventListener();
  }

  addCarNamesSubmitEventListener() {
    $("car-names-input").addEventListener("keyup", e => {
      if (e.key === "Enter") {
        this.submitCarNames();
      }
    });

    $("car-names-submit").addEventListener("click", () => {
      this.submitCarNames();
    });
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
