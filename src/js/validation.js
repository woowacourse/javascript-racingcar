import { ALERT } from './constants.js';

export const isValidTryCount = (input, number) => {
  let isValid = true;
  if (!input) {
    isValid = returnAlert(ALERT.TRY_COUNT_EMPTY);
  } else if (number <= 0) {
    isValid = returnAlert(ALERT.TRY_COUNT_NEG);
  } else if (number !== Math.floor(number)) {
    isValid = returnAlert(ALERT.TRY_COUNT_NOT_INT);
  }
  return isValid;
}

export const isCarNameFilled = input => {
  if (!input) {
    return returnAlert(ALERT.CAR_NAME_EMPTY);
  }
  return true;
}

export const isCarNameUnderFive = nameLength => {
  if (nameLength > 5) {
    return returnAlert(ALERT.CAR_NAME_OVER_FIVE);
  }
  return true;
}

const returnAlert = alertMessage => {
  alert(alertMessage);
  return false;
}