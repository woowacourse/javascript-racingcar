import {
  MAX_RACING_COUNT,
  MIN_CARS_FOR_RACE,
  MIN_NAME_LENGTH,
  MIN_RACING_COUNT,
} from '../constants/configurations.js';
import { ERROR_MESSAGE } from '../constants/systemMessages.js';
import { ListChecker, NumberChecker, StringChecker } from './Checkers.js';

const InputValidator = Object.freeze({
  carNames(carNames) {
    if (ListChecker.isNoRepeatValue(carNames))
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
    carNames.forEach((name) => {
      if (StringChecker.isMoreThanValue(name, MIN_NAME_LENGTH))
        throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
      if (StringChecker.isIncludeBlank(name))
        throw new Error(ERROR_MESSAGE.INVALID_NAME_SPACE);
      if (StringChecker.isNotRegString(name, /^[a-zA-Z]+$/))
        throw new Error(ERROR_MESSAGE.INVALID_NAME_CHARACTER);
    });
    if (ListChecker.isLessThanValue(carNames, MIN_CARS_FOR_RACE))
      throw new Error(ERROR_MESSAGE.INVALID_CAR_COUNT);
  },

  count(count) {
    if (StringChecker.isIncludeBlank(count))
      throw new Error(ERROR_MESSAGE.INVALID_COUNT_SPACE);
    if (StringChecker.isNotRegString(count, /^[0-9]+$/))
      throw new Error(ERROR_MESSAGE.INVALID_COUNT_CHARACTER);
    if (NumberChecker.isLessThanValue(Number(count), MIN_RACING_COUNT))
      throw new Error(ERROR_MESSAGE.INVALID_COUNT_MIN);
    if (NumberChecker.isMoreThanValue(Number(count), MAX_RACING_COUNT))
      throw new Error(ERROR_MESSAGE.INVALID_COUNT_MAX);
  },
});

export default InputValidator;
