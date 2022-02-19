import { $ } from '../util/dom.js';
import { ERROR_MESSAGES } from '../constants/constant.js';

const errorController = ({ isError, message }) => {
  if (isError) {
    window.alert(message);
  }
};

const isTryCountPositiveNumber = tryCountInput => {
  const isSuccess = tryCountInput >= 1;

  errorController({
    isError: !isSuccess,
    message: ERROR_MESSAGES.TRY_COUNT_MIN_NUMBER,
  });

  return isSuccess;
};

const tryCountValidation = tryCountInput => {
  let tryCount = 0;

  if (isTryCountPositiveNumber(tryCountInput)) {
    tryCount = tryCountInput;
  }

  return tryCount;
};

export const getTryCount = e => {
  e.preventDefault();
  const tryCountInput = $('#try-count-input').value;

  return tryCountValidation(tryCountInput);
};
