import { $ } from '../utils/selector.js';
import { ERROR_MESSAGES } from '../utils/constants.js';
import { isValidCount } from '../utils/valid.js';
import { setDisabledAllForms } from '../view/setFormState.js';
import handleRace from './handleRace.js';

const handleCountInput = () => {
  const { value } = $('.count-input');

  if (!isValidCount(value)) {
    alert(ERROR_MESSAGES.INVALID_COUNT);
    return;
  }

  setDisabledAllForms();
  handleRace(value);
};

export default handleCountInput;
