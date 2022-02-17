import { $ } from '../util/dom.js';
import { MIN_TRY_COUNT } from '../constants/constant.js';
import { alertMessage } from '../constants/string.js';
import { displayAlert } from '../component/displayAlert.js';

export const getTryCount = e => {
  e.preventDefault();
  const tryCount = $('#try-count-input').value;
  return tryCount;
};

export const checkTryCount = tryCount => {
  if (isTryCountPositiveNumber(tryCount)) {
    displayAlert(alertMessage.TryCountPositiveNumber);
    return;
  }
  return tryCount;
};

const isTryCountPositiveNumber = tryCount => {
  const isIncorrectValue = tryCount < MIN_TRY_COUNT;
  return isIncorrectValue;
};
