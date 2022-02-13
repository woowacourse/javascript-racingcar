import { ERROR_MESSAGES } from '../utils/constants.js';
import { isDuplicatedName, isValidNameLength } from '../utils/valid.js';
import $ from '../utils/selector.js';

export default function handleNameInput() {
  const names = $('.name-input')
    .value.split(',')
    .map(name => name.trim());

  if (!isValidNameLength(names)) {
    alert(ERROR_MESSAGES.INVALID_NAME_LENGTH);
    return;
  }
  if (!isDuplicatedName(names)) {
    alert(ERROR_MESSAGES.DUPLICATED_NAME);
    return;
  }

  $('.count-form').classList.remove('hidden');
  $('.count-input').focus();
}
