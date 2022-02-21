import { ERROR, LIMIT } from '../util/constants.js';
import playRace from './playRace.js';

function isBelowZero(inputCount) {
  return +inputCount < LIMIT.MIN_LENGTH;
}

export default function handleCountInput() {
  const countForm = document.querySelector('.count-form');
  const inputCount = countForm.querySelector('.count-input').value;
  const countButton = countForm.querySelector('.count-button');

  if (isBelowZero(inputCount)) {
    alert(ERROR.MIN_COUNT);
    return;
  }
  countButton.setAttribute('disabled', true);
  playRace(+inputCount);
}
