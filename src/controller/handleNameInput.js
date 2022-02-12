import { ERROR_MESSAGES, NAME_MAX_LENGTH, NAME_MIN_LENGTH } from '../util/constants.js';

function isValidNameLength(names) {
  return names.some(name => name.length > NAME_MAX_LENGTH && name.length < NAME_MIN_LENGTH);
}

export default function handleNameInput() {
  const names = document
    .querySelector('.name-input')
    .value.split(',')
    .map(name => name.trim());

  if (!isValidNameLength(names)) {
    alert(ERROR_MESSAGES.NAME_LENGTH);
    return;
  }

  document.querySelector('.count-form').style.display = 'block';
  document.querySelector('.count-input').focus();
}
