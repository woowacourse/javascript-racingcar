import { ERROR, LIMIT } from '../util/constants.js';

function isLongerThanFive(names) {
  return names.some(name => name.length > LIMIT.MAX_LENGTH);
}

function isBlankName(names) {
  return names.some(name => name.length < LIMIT.MIN_LENGTH);
}

function handleException(names) {
  if (isLongerThanFive(names)) {
    alert(ERROR.LONGER_THAN_FIVE);
    return false;
  }
  if (isBlankName(names)) {
    alert(ERROR.IS_BLANK);
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

  if (handleException(names)) {
    countForm.classList.remove('d-none');
    countInput.focus();
  }
}
