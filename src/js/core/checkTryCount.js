import { $ } from '../util/dom.js';
import { MIN_TRY_COUNT } from '../constants/constant.js';
import { alertMessage } from '../constants/string.js';
import { displayAlert } from './displayAlert.js';

export const getTryCount = e => {
  e.preventDefault();
  const tryCount = $('#try-count-input').value;
  if (!isTryCountPositiveNumber(tryCount)) {
    return tryCount;
  }
};

const isTryCountPositiveNumber = tryCount => {
  const isIncorrectValue = tryCount < MIN_TRY_COUNT;
  displayAlert(isIncorrectValue, alertMessage.TryCountPositiveNumber);
  return isIncorrectValue;
};
