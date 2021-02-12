import { ALERT_MESSAGE, CONSTANT_NUMBER } from './constants.js';

export const checkCarNameValidity = (carNamesInput, carNamesArr) => {
  if (isInputValueEmpty(carNamesInput)) {
    return alert(ALERT_MESSAGE.CAR_NAME_EMPTY);
  } else if (isCarNamesDuplicate(carNamesArr)) {
    return alert(ALERT_MESSAGE.CAR_NAMES_DUPLICATE);
  } else if (isCarNamesIncludeEmpty(carNamesArr)) {
    return alert(ALERT_MESSAGE.CAR_NAMES_INCLUDE_EMPTY);
  } else if (isCarNameOverFive(carNamesArr)) {
    return alert(ALERT_MESSAGE.CAR_NAME_OVER_FIVE);
  }
  return true;
}

export const checkTryCountValidity = tryCountInput => {
  const tryCountNumber = Number(tryCountInput);
  if (isInputValueEmpty(tryCountInput)) {
    return alert(ALERT_MESSAGE.TRY_COUNT_EMPTY);
  } else if (isTryCountNegative(tryCountNumber)) {
    return alert(ALERT_MESSAGE.TRY_COUNT_NEGATIVE);
  } else if (isTryCountNotInt(tryCountNumber)) {
    return alert(ALERT_MESSAGE.TRY_COUNT_NOT_INT);
  }
  return true;
}

const isCarNameOverFive = carNames => {
  for (let carName of carNames) {
    if(carName.length > CONSTANT_NUMBER.MAX_NAME_LENGTH) {
      return true;
    }
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