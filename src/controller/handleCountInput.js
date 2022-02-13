import { ERROR_MESSAGES } from '../utils/constants.js';
import $ from '../utils/selector.js';
import { isValidCount } from '../utils/valid.js';
import playRace from './playRace.js';

export default function handleCountInput() {
  const { value } = $('.count-input');

  if (!isValidCount(value)) {
    alert(ERROR_MESSAGES.MIN_COUNT);
    return;
  }

  playRace(value);
}
