import { ERROR_MESSAGES } from '../utils/constants.js';
import $ from '../utils/selector.js';
import { isValidCount } from '../utils/valid.js';
import playRace from './playRace.js';

const handleCountInput = () => {
  const { value } = $('.count-input');

  if (!isValidCount(value)) {
    alert(ERROR_MESSAGES.INVALID_COUNT);
    return;
  }

  playRace(value);
};

export default handleCountInput;
