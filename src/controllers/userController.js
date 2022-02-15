import {
  checkNameValid,
  checkRacingNumberValid,
} from "../validations/validation.js";
import { doTrim } from "../utils/utils.js";
import { startRacing } from "./raceController.js";
import {
  renderRacingInputForm,
  changeDisableUserInputs,
} from "../views/view.js";
import { clearState, setCarNames, setRound } from "../models/Race.js";
import {
  clearInputs,
  disapearRacingInputForm,
  disapearRacingContainer,
  disapearRestartButton,
  removeCarNames,
  removeWinners,
} from "../views/view.js";

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
  try {
    checkNameValid(carNames);
  } catch (error) {
    alert(error);
    return;
  }
  setCarNames(carNames);
  renderRacingInputForm();
}

function clickRacingNumberButton(event) {
  event.preventDefault();
  const racingNumber = getRacingNumberFormInput();
  try {
    checkRacingNumberValid(racingNumber);
  } catch (error) {
    alert(error);
    return;
  }
  setRound(racingNumber);
  changeDisableUserInputs();
  startRacing();
}

function clickRestartButton() {
  clearState();
  clearInputs();
  changeDisableUserInputs();
  disapearRacingInputForm();
  disapearRacingContainer();
  disapearRestartButton();
  removeCarNames();
  removeWinners();
}

function getCarsNamesFromInput() {
  const carNamesInput = document.getElementById("car-name-input");
  return doTrim(carNamesInput.value.split(","));
}

function getRacingNumberFormInput() {
  const racingNumberInput = document.getElementById("racing-number-input");
  return racingNumberInput.value;
}
