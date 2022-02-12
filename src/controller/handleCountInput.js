import { ERROR_MESSAGES, MIN_COUNT } from '../util/constants.js';
import playRace from './playRace.js';

function isValidCount(count) {
  if (+count < MIN_COUNT) {
    alert(ERROR_MESSAGES.MIN_COUNT);
    return false;
  }

  return true;
}

export default function handleCountInput() {
  const { value } = document.querySelector('.count-input');

  if (isValidCount(value)) {
    playRace(value);
  }
}
