import { MAX_NAME_LENGTH, MIN_NAME_LENGTH } from '../util/constants.js';
import { getNameErrorMessage } from '../model/getErrorMessage.js';
import $ from '../util/dom.js';
import alertError from '../view/alertError.js';

function isValidNames(inputNames) {
  if (inputNames.some(name => name.length > MAX_NAME_LENGTH)) {
    return false;
  }
  if (inputNames.some(name => name.length < MIN_NAME_LENGTH)) {
    return false;
  }
  return true;
}

export default function handleNameSubmit() {
  const inputNames = $('.name-input')
    .value.split(',')
    .map(name => name.trim());

  const countInput = $('.count-input');
  const countForm = $('.count-form');

  if (isValidNames(inputNames)) {
    countForm.classList.remove('display-none');
    countInput.focus();
    return;
  }
  alertError(getNameErrorMessage(inputNames));
}
