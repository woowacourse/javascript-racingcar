import { ERROR_MESSAGES } from '../utils/constants.js';
import { isDuplicatedName, isValidNameLength } from '../utils/valid.js';
import { $ } from '../utils/selector.js';
import { showElement } from '../utils/handleElement.js';
import { getCarNameArrays } from '../model/generateCars.js';

const handleNameInput = () => {
  const { value } = $('.name-input');
  const names = getCarNameArrays(value);

  if (!isValidNameLength(names)) {
    alert(ERROR_MESSAGES.INVALID_NAME_LENGTH);
    return;
  }
  if (!isDuplicatedName(names)) {
    alert(ERROR_MESSAGES.DUPLICATED_NAME);
    return;
  }

  showElement($('.count-form'));
  $('.count-input').focus();
};

export default handleNameInput;
