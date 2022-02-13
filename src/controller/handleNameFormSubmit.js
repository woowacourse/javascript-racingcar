import { ERROR, LIMIT } from '../util/constants.js';

function isValidNames(names) {
  if (names.some(name => name.length > LIMIT.MAX_LENGTH)) {
    alert(ERROR.LONGER_THAN_FIVE);
    return false;
  }
  if (names.some(name => name.length < LIMIT.MIN_LENGTH)) {
    alert(ERROR.IS_BLANK);
    return false;
  }
  return true;
}

export default function handleNameFormSubmit() {
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
