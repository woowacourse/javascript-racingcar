import { ERROR_MESSAGES } from '../utils/constants.js';
import { isDuplicatedName, isValidNameLength } from '../utils/valid.js';

export default function handleNameInput() {
  const names = document
    .querySelector('.name-input')
    .value.split(',')
    .map(name => name.trim());

  if (!isValidNameLength(names)) {
    alert(ERROR_MESSAGES.NAME_LENGTH);
    return;
  }
  if (!isDuplicatedName(names)) {
    alert(ERROR_MESSAGES.DUPLICATED_NAME);
    return;
  }

  document.querySelector('.count-form').style.display = 'block';
  document.querySelector('.count-input').focus();
}
