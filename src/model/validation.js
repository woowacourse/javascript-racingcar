import { isBlank, isExceedLength, isNotExist, isNotNaturalNumber } from '../util/index.js';
import { ERROR_MESSAGES } from '../constants/index.js';

export const validateCarNames = (carNamesList) => {
  if (isNotExist(carNamesList)) {
    throw new Error(ERROR_MESSAGES.NOT_EXIST_CAR_NAME);
  }

  if (carNamesList.some(isExceedLength)) {
    throw new Error(ERROR_MESSAGES.EXCEED_CAR_NAME_LENGTH);
  }

  if (carNamesList.some(isBlank)) {
    throw new Error(ERROR_MESSAGES.BLANK_CAR_NAME);
  }
};

export const validateRacingCount = (racingCount) => {
  if (isNotExist(racingCount)) {
    throw new Error(ERROR_MESSAGES.NOT_EXIST_RACING_COUNT);
  }

  if (isNaN(racingCount)) {
    throw new Error(ERROR_MESSAGES.NOT_NUMBER_TYPE);
  }

  if (isNotNaturalNumber(racingCount)) {
    throw new Error(ERROR_MESSAGES.NOT_NATURAL_NUMBER);
  }
};
