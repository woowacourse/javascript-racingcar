import { ERROR_MESSAGES, NAME_MAX_LENGTH, NAME_MIN_LENGTH } from '../util/constants.js';

function isValidNames(names) {
  if (names.some(name => name.length > NAME_MAX_LENGTH)) {
    alert(ERROR_MESSAGES.LONGER_THAN_FIVE);
    return false;
  }
  if (names.some(name => name.length < NAME_MIN_LENGTH)) {
    alert(ERROR_MESSAGES.IS_BLANK);
    return false;
  }
  
  return true;
}

export default function handleNameInput() {
  const names = document
    .querySelector('.name-input')
    .value.split(',')
    .map(name => name.trim());

  const countInput = document.querySelector('.count-input');
  const countForm = document.querySelector('.count-form');

  if (isValidNames(names)) {
    countForm.style.display = 'block';
    countInput.focus();
  }
}
