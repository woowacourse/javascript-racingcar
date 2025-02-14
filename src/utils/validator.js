import {
  MAX_NAME_LENGTH,
  MAX_RACE_COUNT,
  MIN_CAR_COUNT,
  MIN_RACE_COUNT,
  NAME_PATTERN,
  NUMBER_PATTERN,
} from '../constants/configurations.js';
import { ERROR_MESSAGE } from '../constants/systemMessages.js';

const validator = Object.freeze({
  carNames(carNames) {
    if (carNames.length !== new Set(carNames).size)
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);

    if (carNames.some((name) => name.length > MAX_NAME_LENGTH))
      throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);

    if (carNames.some((name) => name.includes(' ')))
      throw new Error(ERROR_MESSAGE.INVALID_NAME_SPACE);

    if (carNames.some((name) => !NAME_PATTERN.test(name)))
      throw new Error(ERROR_MESSAGE.INVALID_NAME_CHARACTER);

    if (carNames.length < MIN_CAR_COUNT) throw new Error(ERROR_MESSAGE.INVALID_CAR_COUNT);
  },

  count(count) {
    if (count.includes(' ')) throw new Error(ERROR_MESSAGE.INVALID_COUNT_SPACE);

    if (!NUMBER_PATTERN.test(count))
      throw new Error(ERROR_MESSAGE.INVALID_COUNT_CHARACTER);

    if (Number(count) < MIN_RACE_COUNT) throw new Error(ERROR_MESSAGE.INVALID_COUNT_MIN);

    if (Number(count) > MAX_RACE_COUNT) throw new Error(ERROR_MESSAGE.INVALID_COUNT_MAX);
  },
});

export default validator;
