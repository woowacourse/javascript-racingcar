import { $ } from '../util/dom.js';
import { ERROR_MESSAGES } from '../constants/constant.js';

const isTryCountPositiveNumber = tryCountInput => {
  if (tryCountInput < 1) {
    window.alert(ERROR_MESSAGES.IS_TRY_COUNT_POSITIVE_NUMBER);
  }

  return tryCountInput < 1;
};

export const getTryCount = e => {
  e.preventDefault();
  const tryCountInput = $('#try-count-input').value;
  if (!isTryCountPositiveNumber(tryCountInput)) {
    return tryCountInput;
  }

  return undefined;
};
