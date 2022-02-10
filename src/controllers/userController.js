import { isNameValid, isRacingNumberValid, isCarNameExist } from './validation.js';
import { doTrim } from './utils.js';
import { race } from './raceController.js';

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
  if (!isNameValid(carNames)) {
    state.cars = carNames;
  }
}

export function setRoundClick(state) {
  const racingNumberInputButton = document.getElementById('racing-number-input-button');
  racingNumberInputButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (isCarNameExist(state)) {
      setRound(event, state);
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
  }
}
