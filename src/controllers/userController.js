import { isNameValid, isRacingNumberValid, isUserInputExist } from './validation.js';
import { doTrim } from './utils.js';
import { race, clearState } from './raceController.js';
import {
  renderRacingInputForm,
  renderRacingContainer,
  disableUserInput,
  removeRacingContainer,
} from '../views/view.js';
import { state } from '../models/state.js';

export function registerClickEventListners() {
  setCarNamesClick();
  setRoundClick();
  restartBtnClick();
}

function setCarNamesClick() {
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

function setRoundClick() {
  const racingNumberInputButton = document.getElementById('racing-number-input-button');
  racingNumberInputButton.addEventListener('click', (event) => {
    setRound(event);
    if (isUserInputExist()) {
      disableUserInput();
      race();
    }
  });
}

function setRound(event) {
  event.preventDefault();
  const racingNumberInput = document.getElementById('racing-number-input');
  const racingNumber = racingNumberInput.value;
  if (isRacingNumberValid(racingNumber)) {
    state.racingNumber = racingNumber;
    renderRacingContainer();
    return true;
  }
}

function restartBtnClick() {
  const restartBtn = document.getElementById('restart-button');
  restartBtn.addEventListener('click', doRestart);
}

function doRestart() {
  clearState();
  removeRacingContainer();
}
