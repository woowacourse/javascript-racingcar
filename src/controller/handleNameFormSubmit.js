import { LIMIT } from '../util/constants.js';
import { getNameErrorMessage } from '../model/getErrorMessage.js';
import $ from '../util/dom.js';
import alertError from '../view/alertError.js';

function isValidNames(inputNames) {
  if (inputNames.some(name => name.length > LIMIT.MAX_LENGTH)) {
    return false;
  }
  if (inputNames.some(name => name.length < LIMIT.MIN_LENGTH)) {
    return false;
  }
  return true;
}

export default function handleNameFormSubmit() {
  const inputNames = $('.name-input')
    .value.split(',')
    .map(name => name.trim());

  const countInput = $('.count-input');
  const countForm = $('.count-form');

  if (isValidNames(inputNames)) {
    countForm.style.display = 'block';
    countInput.focus();
    return;
  }
  alertError(getNameErrorMessage(inputNames));
}
