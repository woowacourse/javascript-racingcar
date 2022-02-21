import { $ } from "../view/getElement.js";
import { disableCountForm, enableCountForm } from "../view/countView.js";
import { carNameValidation, racingCountValidation } from "./Validate.js";
import { EXCEPTIONS } from "../constants/exceptions.js";
import { trimArray } from "../utils/trimArray.js";
import { initializeView } from "../view/initialView.js";

export default class UserManager {
  constructor(carManager, gameManager) {
    this.carManager = carManager;
    this.gameManager = gameManager;
    this.addSubmitEventListener();
  }

  submitCarNames() {
    const carNamesArray = trimArray($("car-names-input").value.split(","));

    if (!carNameValidation.isValidLengthAll(carNamesArray)) {
      alert(EXCEPTIONS.INVALID_CAR_NAME_LENGTH);
      return;
    }
    if (carNameValidation.isDuplicatedName(carNamesArray)) {
      alert(EXCEPTIONS.DUPLICATED_CAR);
      return;
    }

    this.carManager.createCars(carNamesArray);
    enableCountForm();
  }

  submitRacingCount() {
    const racingCount = $("racing-count-input").valueAsNumber;

    if (
      !racingCountValidation.isValidRange(racingCount) ||
      !Number.isInteger(racingCount)
    ) {
      alert(EXCEPTIONS.INVALID_RACE_COUNT);
      return;
    }

    this.gameManager.startGame(this.carManager, racingCount);
    disableCountForm();
  }

  addSubmitEventListener() {
    this.addCarNamesSubmitEventListener();
    this.addSubmitRacingCountEventListener();
    this.addLogoClickEventListener();
    this.addRestartEventListener();
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

  addLogoClickEventListener() {
    $("logo").addEventListener("click", () => {
      initializeView();
      this.carManager.init();
    });
  }

  addRestartEventListener() {
    $("restart-button").addEventListener("click", () => {
      initializeView();
      this.carManager.init();
    });
  }
}
