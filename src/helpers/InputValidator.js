import { ERROR_MESSAGES, SEPERATOR } from '../lib/constants.js';

export default class Validator {
  static validateCarName(rawName) {
    const nameList = rawName.split(SEPERATOR);
    for (const name of nameList) {
      if (name.length > 5 || name.length === 0)
        throw new Error(ERROR_MESSAGES.carName);
    }
  }

  static validateCount(rawCount) {
    const count = Number(rawCount);

    if (Number.isNaN(count)) throw new Error(ERROR_MESSAGES.countNotANumber);
    if (count <= 0) throw new Error(ERROR_MESSAGES.countNotPositive);
    if (!Number.isInteger(count))
      throw new Error(ERROR_MESSAGES.countNotInteger);
  }
}
