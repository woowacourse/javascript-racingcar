import { ERROR_MESSAGES, MAX_CAR_NAME_LENGTH, MIN_CAR_NAME_LENGTH } from '../constants.js';
import ValidationResult from './validation-result.js';

export const validateCarNames = (carNames) => {
  if (!carNames) {
    return new ValidationResult(true, ERROR_MESSAGES.EMPTY_CAR_NAME);
  }
  const carNameList = carNames.split(',');
  for (let i = 0; i < carNameList.length; i += 1) {
    const carName = carNameList[i];
    if (carName.length < MIN_CAR_NAME_LENGTH) {
      return new ValidationResult(true, ERROR_MESSAGES.FALL_SHORT_OF_MIN_CAR_NAME_LENGTH);
    }
    if (carName.length > MAX_CAR_NAME_LENGTH) {
      return new ValidationResult(true, ERROR_MESSAGES.BEYOND_MAX_CAR_NAME_LENGTH);
    }
  }
  return new ValidationResult(false);
};
