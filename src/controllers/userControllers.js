import { isNameValid } from './validation.js';
import { doTrim } from './utils.js';

export function setCarNamesClick(state) {
  const carNamesInputBtn = document.getElementById('car-name-input-button');
  carNamesInputBtn.addEventListener('click', () => {
    getCarNames(event, state);
  });
}

function getCarNames(event, state) {
  event.preventDefault();
  const carNamesInput = document.getElementById('car-name-input');
  const carNames = doTrim(carNamesInput.value.split(','));
  if (!isNameValid(carNames)) {
    state.cars = carNames;
  }
}
