import {
  isCompleteWord,
  isDuplicated,
  isIncludingBlank,
  isInteger,
  isPositiveNumber,
  isValidLength,
} from './utils.js';

import { CAR_NAME_ERROR_MESSAGE, NUMBERS, TRY_COUNT_ERROR_MESSAGE } from '../constants.js';

export const carNameValidator = (carNames) => {
  const isCarNameValidLength = () =>
    carNames.every((carName) =>
      isValidLength(carName, NUMBERS.MIN_NAME_LENGTH, NUMBERS.MAX_NAME_LENGTH)
    );

  if (!isCarNameValidLength()) {
    return CAR_NAME_ERROR_MESSAGE.INVALID_LENGTH;
  }

  if (carNames.some(isIncludingBlank)) {
    return CAR_NAME_ERROR_MESSAGE.INCLUDE_BLANK;
  }

  if (isDuplicated(carNames)) {
    return CAR_NAME_ERROR_MESSAGE.DUPLICATED;
  }

  if (!carNames.every(isCompleteWord)) {
    return CAR_NAME_ERROR_MESSAGE.INCOMPLETE_WORD;
  }
};

export const tryCountValidator = (tryCount) => {
  if (!isInteger(tryCount)) {
    return TRY_COUNT_ERROR_MESSAGE.NOT_INTEGER;
  }

  if (!isPositiveNumber(tryCount)) {
    return TRY_COUNT_ERROR_MESSAGE.NOT_POSITIVE;
  }
};
