import { isNameValid, isRacingNumberValid, isCarNameExist } from './validation.js';
import { doTrim } from './utils.js';
import { race } from './raceController.js';
import { renderRacingInputForm, renderRacingContainer, disableUserInput } from '../views/view.js';

export function setCarNamesClick(state) {
  const carNamesInputBtn = document.getElementById('car-name-input-button');
  carNamesInputBtn.addEventListener('click', () => {
    setCarNames(event, state);
  });
}

function setCarNames(event, state) {
  event.preventDefault();
  const carNamesInput = document.getElementById('car-name-input');
  const carNames = doTrim(carNamesInput.value.split(','));
  if (isNameValid(carNames)) {
    state.cars = carNames;
    renderRacingInputForm();
  }
}

export function setRoundClick(state) {
  const racingNumberInputButton = document.getElementById('racing-number-input-button');
  racingNumberInputButton.addEventListener('click', (event) => {
    setRound(event, state);
    if (isUserInputExist(state)) {
      disableUserInput();
      race(state);
    }
  });
}

function setRound(event, state) {
  event.preventDefault();
  const racingNumberInput = document.getElementById('racing-number-input');
  const racingNumber = racingNumberInput.value;
  if (isRacingNumberValid(racingNumber)) {
    state.racingNumber = racingNumber;
    renderRacingContainer();
    return true;
  }
}

function isRacingNumberExist(state) {
  if (state.racingNumber !== 0) {
    return true;
  }
  return false;
}

function isUserInputExist(state) {
  if (!isCarNameExist(state)) {
    return false;
  }
  if (!isRacingNumberExist(state)) {
    return false;
  }
  return true;
}

export function restartBtnClick(state) {
  const restartBtn = document.getElementById('restart-button');
  restartBtn.addEventListener('click', doRestart);
}

function doRestart() {
  location.reload(true);
}
