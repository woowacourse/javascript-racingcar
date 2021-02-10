import { ERR_MESSAGE, CAR } from './constant.js';

export const validateCarNames = (carNames) => {
  if (!carNames.every((name) => isValidLength(name))) {
    return ERR_MESSAGE.NAME_TOO_LONG;
  }
  if (!carNames.every((name) => !isBlank(name))) {
    return ERR_MESSAGE.NAME_CANNOT_BE_BLANK;
  }
};

const isValidLength = (name) => {
  return name.length <= CAR.MAX_NAME_LENGTH;
};

const isBlank = (name) => {
  return name.length < CAR.MIN_NAME_LENGTH;
};
