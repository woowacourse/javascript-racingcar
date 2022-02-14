import {
  isNameValid,
  isRacingNumberValid,
  isUserInputExist,
} from "../validations/validation.js";
import { doTrim, showAlertMsg } from "../utils/utils.js";
import { startRacing } from "./raceController.js";
import { renderRacingInputForm, disableUserInputs } from "../views/view.js";
import { setCarNames, setRound } from "../models/Race.js";

export function registerClickEventListeners() {
  const carNamesButton = document.getElementById("car-name-input-button");
  const racingNumberButton = document.getElementById(
    "racing-number-input-button"
  );
  const restartButton = document.getElementById("restart-button");
  carNamesButton.addEventListener("click", clickCarNamesButton);
  racingNumberButton.addEventListener("click", clickRacingNumberButton);
  restartButton.addEventListener("click", clickRestartButton);
}

function clickCarNamesButton(event) {
  event.preventDefault();
  const carNames = getCarsNamesFromInput();
  if (!isNameValid(carNames)) {
    return;
  }
  setCarNames(carNames);
  renderRacingInputForm();
}

function clickRacingNumberButton(event) {
  event.preventDefault();
  const racingNumber = getRacingNumberFormInput();
  if (!isRacingNumberValid(racingNumber) && !isUserInputExist()) {
    return;
  }
  setRound(racingNumber);
  disableUserInputs();
  startRacing();
}

function clickRestartButton() {
  location.reload(true);
}

function getCarsNamesFromInput() {
  const carNamesInput = document.getElementById("car-name-input");
  return doTrim(carNamesInput.value.split(","));
}

function getRacingNumberFormInput() {
  const racingNumberInput = document.getElementById("racing-number-input");
  return racingNumberInput.value;
}
