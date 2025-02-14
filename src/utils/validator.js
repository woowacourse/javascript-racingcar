import {
  MAX_RACING_COUNT,
  MIN_CARS_FOR_RACE,
  MIN_NAME_LENGTH,
  MIN_RACING_COUNT,
} from '../constants/configurations.js';
import { ERROR_MESSAGE } from '../constants/systemMessages.js';

const validator = Object.freeze({
  carNames(carNames) {
    if (carNames.length !== new Set(carNames).size)
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
    if (carNames.some((name) => name.length > MIN_NAME_LENGTH))
      throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
    if (carNames.some((name) => name.includes(' ')))
      throw new Error(ERROR_MESSAGE.INVALID_NAME_SPACE);
    if (carNames.some((name) => !/^[a-zA-Z]+$/.test(name)))
      throw new Error(ERROR_MESSAGE.INVALID_NAME_CHARACTER);
    if (carNames.length < MIN_CARS_FOR_RACE)
      throw new Error(ERROR_MESSAGE.INVALID_CAR_COUNT);
  },

  count(count) {
    if (count.includes(' ')) throw new Error(ERROR_MESSAGE.INVALID_COUNT_SPACE);
    if (!/^[0-9]+$/.test(count))
      throw new Error(ERROR_MESSAGE.INVALID_COUNT_CHARACTER);
    if (Number(count) < MIN_RACING_COUNT)
      throw new Error(ERROR_MESSAGE.INVALID_COUNT_MIN);
    if (Number(count) > MAX_RACING_COUNT)
      throw new Error(ERROR_MESSAGE.INVALID_COUNT_MAX);
  },
});

export default validator;
