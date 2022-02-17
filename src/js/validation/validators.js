import {
  ERROR_MESSAGES,
  MAX_CAR_NAME_LENGTH,
  MAX_RACING_COUNT,
  MIN_CAR_NAME_LENGTH,
} from '../constants.js';
import ValidationResult from './validation-result.js';

const isNumber = (num) => {
  // Number => 소수점도 허용하기 때문에 사용하지 않는다
  // parseInt => 중간에 문자가 있어도 숫자를 리턴하기 때문에 사용하지 않는다
  return /^-?[0-9]+$/g.test(num);
};

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

export const validateRacingCount = (racingCount) => {
  if (racingCount === '') {
    return new ValidationResult(true, ERROR_MESSAGES.EMPTY_RACING_COUNT);
  }
  if (!isNumber(racingCount)) {
    return new ValidationResult(true, ERROR_MESSAGES.TYPE_MISMATCH_OF_RACING_COUNT);
  }
  if (racingCount <= 0) {
    return new ValidationResult(true, ERROR_MESSAGES.FALL_SHORT_OF_MIN_RACING_COUNT);
  }
  if (racingCount > MAX_RACING_COUNT) {
    return new ValidationResult(true, ERROR_MESSAGES.BEYOND_MAX_RACING_COUNT);
  }
  return new ValidationResult(false);
};
