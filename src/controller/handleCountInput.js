import { ERROR_MESSAGES, MIN_COUNT } from '../util/constants.js';
import playRace from './playRace.js';

function isValidCount(count) {
  return +count >= MIN_COUNT;
}

export default function handleCountInput() {
  const { value } = document.querySelector('.count-input');

  if (!isValidCount(value)) {
    alert(ERROR_MESSAGES.MIN_COUNT);
    return;
  }

  playRace(value);
}
