import { ERROR, LIMIT } from '../util/constants.js';
import playRace from './playRace.js';

function isValidCount(count) { 
  if (+count < LIMIT.MIN_LENGTH) {
    alert(ERROR.MIN_COUNT);
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
