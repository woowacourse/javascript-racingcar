import { ALERT, NUMBER } from './constants.js';

export const isTryCountNotValid = (input, number) => {
  let isNotValid = false;
  if (!input) {
    isNotValid = returnAlert(ALERT.TRY_COUNT_EMPTY);
  } else if (number <= 0) {
    isNotValid = returnAlert(ALERT.TRY_COUNT_NEGATIVE);
  } else if (number !== Math.floor(number)) {
    isNotValid = returnAlert(ALERT.TRY_COUNT_NOT_INT);
  }
  return isNotValid;
}

export const isCarNameEmpty = input => {
  if (!input) {
    return returnAlert(ALERT.CAR_NAME_EMPTY);
  }
  return false;
}

export const isCarNameOverFive = nameLength => {
  if (nameLength > NUMBER.MAX_NAME_LENGTH) {
    return returnAlert(ALERT.CAR_NAME_OVER_FIVE);
  }
  return false;
}

export const isCarNamesDuplicate = input => {
  const carNameArr = input.split(',').map(name => name.trim());
  if (carNameArr.some((name, idx) => carNameArr.indexOf(name) !== idx)) {
    return returnAlert(ALERT.CAR_NAMES_DUPLICATE);
  }
  return false;
}

const returnAlert = alertMessage => {
  alert(alertMessage);
  return true;
}