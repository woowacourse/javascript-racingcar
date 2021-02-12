import { ALERT_MESSAGE, CONSTANT_NUMBER } from './constants.js';

export const checkTryCountValidity = input => {
  const tryCountNumber = Number(input);
  if (isInputValueEmpty(input)) {
    return alert(ALERT_MESSAGE.TRY_COUNT_EMPTY);
  } else if (isTryCountNegative(tryCountNumber)) {
    return alert(ALERT_MESSAGE.TRY_COUNT_NEGATIVE);
  } else if (isTryCountNotInt(tryCountNumber)) {
    return alert(ALERT_MESSAGE.TRY_COUNT_NOT_INT);
  }
  return true;
}

export const checkCarNameValidity = input => {
  const carNameArr = input.split(',').map(name => name.trim());
  if (isInputValueEmpty(input)) {
    return alert(ALERT_MESSAGE.CAR_NAME_EMPTY);
  } else if (isCarNamesDuplicate(carNameArr)) {
    return alert(ALERT_MESSAGE.CAR_NAMES_DUPLICATE);
  } else if (isCarNamesIncludeEmpty(carNameArr)) {
    return alert(ALERT_MESSAGE.CAR_NAMES_INCLUDE_EMPTY);
  }
  return true;
}

export const isCarNameOverFive = nameLength => {
  if (nameLength > CONSTANT_NUMBER.MAX_NAME_LENGTH) {
    return true;
  }
  return false;
}

const isInputValueEmpty = input => {
  if (!input) {
    return true;
  }
  return false;
}

const isTryCountNegative = number => {
  if (number <= 0) {
    return true;
  }
  return false;
}

const isTryCountNotInt = number => {
  if (number !== Math.floor(number)) {
    return true;
  }
  return false;
}

const isCarNamesDuplicate = carNameArr => {
  if (carNameArr.some((name, idx) => carNameArr.indexOf(name) !== idx)) {
    return true;
  }
  return false;
}

const isCarNamesIncludeEmpty = carNameArr => {
  if(carNameArr.includes('')) {
    return true;
  }
  return false;
}