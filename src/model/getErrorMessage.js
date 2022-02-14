import { ERROR_MESSAGE, MIN_COUNT, MAX_NAME_LENGTH, MIN_NAME_LENGTH } from '../util/constants.js';

export function getCountErrorMessage(inputCount) {
  if (inputCount.length === 0) {
    return ERROR_MESSAGE.COUNT_IS_BLANK;
  }
  if (+inputCount < MIN_COUNT) {
    return ERROR_MESSAGE.UNDER_MIN_COUNT;
  }
  return ERROR_MESSAGE.NO_PROPER;
}

export function getNameErrorMessage(inputNames) {
  if (inputNames.some(name => name.length > MAX_NAME_LENGTH)) {
    return ERROR_MESSAGE.LONGER_THAN_FIVE;
  }
  if (inputNames.some(name => name.length < MIN_NAME_LENGTH)) {
    return ERROR_MESSAGE.NAME_IS_BLANK;
  }
  return ERROR_MESSAGE.NO_PROPER;
}
