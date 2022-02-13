import { ERROR, LIMIT } from '../util/constants.js';

export function getCountErrorMessage(inputCount) {
  if (+inputCount < LIMIT.MIN_LENGTH) {
    return ERROR.MIN_COUNT;
  }
  return ERROR.NO_PROPER_ERROR;
}

export function getNameErrorMessage(inputNames) {
  if (inputNames.some(name => name.length > LIMIT.MAX_LENGTH)) {
    return ERROR.LONGER_THAN_FIVE;
  }
  if (inputNames.some(name => name.length < LIMIT.MIN_LENGTH)) {
    return ERROR.IS_BLANK;
  }
  return ERROR.NO_PROPER_ERROR;
}
