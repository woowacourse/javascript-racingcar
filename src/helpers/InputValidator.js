import { ERROR_MESSAGES, SEPERATOR } from '../lib/constants.js';

export default class Validator {
  static validateCarNames(carNames) {
    if (!carNames.every(name => name.length <= 5 && name.length >= 1))
      throw new Error(ERROR_MESSAGES.carName.length);

    if (carNames.length !== new Set(carNames).size)
      throw new Error(ERROR_MESSAGES.carName.duplicate);
  }

  static validateCount(tryCount) {
    if (Number.isNaN(tryCount)) throw new Error(ERROR_MESSAGES.tryCount.number);
    if (tryCount <= 0) throw new Error(ERROR_MESSAGES.tryCount.positiveNumber);
    if (!Number.isInteger(tryCount))
      throw new Error(ERROR_MESSAGES.tryCount.integer);
  }
}
