import {
  ALERT_DECIMAL,
  ALERT_OVERLAP,
  ALERT_VALID_COUNT_RANGE,
  ALERT_VALID_LENGTH,
  ALERT_VALID_LETTER,
  ALERT_VALID_NUMBER_OF_CARS,
  MAX_NAME_LENGTH,
  MIN_NAMES_NUMBER,
  MIN_NAME_LENGTH,
} from '../constants/index.js';

export const isValidateNameInput = names => {
  return (
    hasMoreThan2Cars(names) &&
    isValidLetter(names) &&
    isValidLength(names) &&
    isNotOverlapped(names)
  );
};

const hasMoreThan2Cars = names => {
  if (names.length < MIN_NAMES_NUMBER) {
    alert(ALERT_VALID_NUMBER_OF_CARS);
    return false;
  }

  return true;
};

const isValidLength = names => {
  const isValid = names.every(
    name => name.length >= MIN_NAME_LENGTH && name.length <= MAX_NAME_LENGTH
  );
  if (!isValid) {
    alert(ALERT_VALID_LENGTH);
    return false;
  }

  return true;
};

const isValidLetter = names => {
  const rExeption = /[^0-9a-z가-힣]/i;
  const isValid = names.every(name => !rExeption.test(name));
  if (!isValid) {
    alert(ALERT_VALID_LETTER);
    return false;
  }

  return true;
};

const isNotOverlapped = names => {
  const hash = {};
  for (const name of names) {
    if (hash.hasOwnProperty(name)) {
      alert(ALERT_OVERLAP);
      return false;
    }
    hash[name] = true;
  }

  return true;
};

export const isValidCountInput = count => {
  return isMoreThanZero(count) && isInteger(count);
};

const isMoreThanZero = count => {
  if (count <= 0) {
    alert(ALERT_VALID_COUNT_RANGE);
    return false;
  }

  return true;
};

const isInteger = count => {
  if (count % 1 !== 0) {
    alert(ALERT_DECIMAL);
    return false;
  }

  return true;
};
