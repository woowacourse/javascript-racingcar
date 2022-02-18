import { isNameValid, isRacingNumberValid, isUserInputExist } from '../utils/validation.js';
import { doTrim } from '../utils/utils.js';
import { race, clearState } from './raceController.js';
import {
  renderRacingInputForm,
  renderRacingContainer,
  disableUserInput,
  removeRacingContainer,
} from '../views/view.js';
import { state } from '../models/state.js';

export function registerClickEventListners() {
  registerCarNamesClickEvent();
  registerRacingNumberClickEvent();
  registerRestartBtnClickEvent();
}

function registerCarNamesClickEvent() {
  const carNamesInputBtn = document.getElementById('car-name-input-button');
  carNamesInputBtn.addEventListener('click', () => {
    setCarNames(event);
  });
}

function setCarNames(event) {
  event.preventDefault();
  const carNamesInput = document.getElementById('car-name-input');
  const carNames = doTrim(carNamesInput.value.split(','));
  if (isNameValid(carNames)) {
    state.cars = carNames;
    renderRacingInputForm();
  }
}

function registerRacingNumberClickEvent() {
  const racingNumberInputButton = document.getElementById('racing-number-input-button');
  racingNumberInputButton.addEventListener('click', (event) => {
    setRacingNumber(event);
    if (isUserInputExist()) {
      disableUserInput();
      race();
    }
  });
}

function setRacingNumber(event) {
  event.preventDefault();
  const racingNumberInput = document.getElementById('racing-number-input');
  const racingNumber = racingNumberInput.value;
  if (isRacingNumberValid(racingNumber)) {
    state.racingNumber = racingNumber;
    renderRacingContainer();
    return true;
  }
}

function registerRestartBtnClickEvent() {
  const restartBtn = document.getElementById('restart-button');
  restartBtn.addEventListener('click', doRestart);
}

function doRestart() {
  clearState();
  removeRacingContainer();
}
