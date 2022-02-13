import { INPUT_ERROR, RACINGGAME } from '../constants/constants.js';

const isValidLength = (names) => {
  return names.every((name) => name.length <= 5);
};

const isDuplicated = (names) => {
  const set = new Set([...names]);
  return names.length !== set.size;
};

const isContainedBlank = (names) => {
  return names.some((name) => name.includes(' '));
};

const isContainedNull = (names) => {
  return names.some((name) => name === '');
};

const isInteger = (number) => {
  return number % 1 === 0;
};

const isInRange = (number) => {
  return number > 0 && number <= RACINGGAME.MAX_RACING_COUNT;
};

const isBlank = (number) => {
  return number.trim() === '';
};

export const validateCarNames = (names) => {
  if (isContainedNull(names)) {
    throw new Error(INPUT_ERROR.NULL);
  }
  if (!isValidLength(names)) {
    throw new Error(INPUT_ERROR.INVALID_LENGTH);
  }
  if (isDuplicated(names)) {
    throw new Error(INPUT_ERROR.DUPLICATED);
  }
  if (isContainedBlank(names)) {
    throw new Error(INPUT_ERROR.CONTAINED_BLANK);
  }
};

export const validateCount = (count) => {
  if (isBlank(count)) {
    throw new Error(INPUT_ERROR.COUNT_BLANK);
  }
  if (!isInRange(count)) {
    throw new Error(INPUT_ERROR.COUNT_NOT_IN_RANGE);
  }
  if (!isInteger(count)) {
    throw new Error(INPUT_ERROR.COUNT_NOT_NATURAL);
  }
};
