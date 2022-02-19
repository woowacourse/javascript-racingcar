import {
  checkNameValid,
  checkRoundCountValid,
} from "../validations/validation.js";
import { doTrim } from "../utils/utils.js";
import { startRacing } from "./raceController.js";
import {
  renderRoundCountInputForm,
  changeDisableUserInputs,
} from "../views/view.js";
import { clearState, setCars, setRoundCount } from "../models/Race.js";
import {
  clearInputs,
  hideRoundCountInputForm,
  hideRacingContainer,
  hideRestartButton,
  removeCarNames,
  removeWinners,
} from "../views/view.js";

export function registerClickEventListeners() {
  const carNamesButton = document.getElementById("car-name-input-button");
  const roundCountButton = document.getElementById("round-count-input-button");
  const restartButton = document.getElementById("restart-button");
  carNamesButton.addEventListener("click", clickCarNamesButton);
  roundCountButton.addEventListener("click", clickRoundCountButton);
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
  setCars(carNames);
  renderRoundCountInputForm();
}

function clickRoundCountButton(event) {
  event.preventDefault();
  const roundCount = getRoundCountFromInput();
  try {
    checkRoundCountValid(roundCount);
  } catch (error) {
    alert(error);
    return;
  }
  setRoundCount(roundCount);
  changeDisableUserInputs();
  startRacing();
}

function clickRestartButton() {
  clearState();
  clearInputs();
  changeDisableUserInputs();
  hideRoundCountInputForm();
  hideRacingContainer();
  hideRestartButton();
  removeCarNames();
  removeWinners();
}

function getCarsNamesFromInput() {
  const carNamesInput = document.getElementById("car-name-input");
  return doTrim(carNamesInput.value.split(","));
}

function getRoundCountFromInput() {
  const roundCountInput = document.getElementById("round-count-input");
  return roundCountInput.value;
}
