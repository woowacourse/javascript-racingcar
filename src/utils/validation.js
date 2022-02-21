import { INPUT_ERROR } from '../constants/constants.js';

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

const isNameEmpty = (names) => {
  return names.some((name) => name === '');
};

const isInteger = (number) => {
  return number % 1 === 0;
};

const isNotNegative = (number) => {
  return number >= 0;
};

const isRoundEmpty = (number) => {
  return number.trim() === '';
};

export const validateCarNames = (names) => {
  if (isNameEmpty(names)) {
    throw new Error(INPUT_ERROR.NAME_EMPTY);
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

export const validateRound = (round) => {
  if (isRoundEmpty(round)) {
    throw new Error(INPUT_ERROR.ROUND_EMPTY);
  }
  if (!isNotNegative(round)) {
    throw new Error(INPUT_ERROR.ROUND_NEGATIVE);
  }
  if (!isInteger(round)) {
    throw new Error(INPUT_ERROR.ROUND_NOT_NATURAL);
  }
};
