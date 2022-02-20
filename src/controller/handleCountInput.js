import { ERROR, LIMIT } from '../util/constants.js';
import playRace from './playRace.js';

function isBelowZero(inputCount) {
  return +inputCount < LIMIT.MIN_LENGTH;
}

export default function handleCountInput() {
  const inputCount = document.querySelector('.count-input').value;

  if (isBelowZero(inputCount)) {
    alert(ERROR.MIN_COUNT);
    return;
  }
  playRace(+inputCount);
}
