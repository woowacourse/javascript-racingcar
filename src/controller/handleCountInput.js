import { ERROR_MESSAGES } from '../utils/constants.js';
import { isValidCount } from '../utils/valid.js';
import playRace from './playRace.js';

export default function handleCountInput() {
  const { value } = document.querySelector('.count-input');

  if (!isValidCount(value)) {
    alert(ERROR_MESSAGES.MIN_COUNT);
    return;
  }

  playRace(value);
}
