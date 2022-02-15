import { isEmpty, isExceedLength, isNotNaturalNumber } from '../util/index.js';
import { ERROR_MESSAGES } from '../constants/index.js';

export const checkValidCarNames = (carNamesList) => {
  if (carNamesList.some(isExceedLength)) {
    throw new Error(ERROR_MESSAGES.EXCEED_CAR_NAME_LENGTH);
  }

  if (carNamesList.some(isEmpty)) {
    throw new Error(ERROR_MESSAGES.BLANK_CAR_NAME);
  }
};

export const checkValidRacingCount = (racingCount) => {
  if (isNaN(racingCount)) {
    throw new Error(ERROR_MESSAGES.NOT_NUMBER_TYPE);
  }

  if (isNotNaturalNumber(racingCount)) {
    throw new Error(ERROR_MESSAGES.NOT_NATURAL_NUMBER);
  }
};
