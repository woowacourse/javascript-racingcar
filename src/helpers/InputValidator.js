import { ERROR_MESSAGES, SEPERATOR } from '../lib/constants.js';

export default class Validator {
  static validateCarName(rawName) {
    const nameList = rawName.split(SEPERATOR);

    if (!nameList.every(name => name.length <= 5 && name.length >= 1))
      throw new Error(ERROR_MESSAGES.carName.length);

    if (nameList.length !== new Set(nameList).size)
      throw new Error(ERROR_MESSAGES.carName.duplicate);
  }

  static validateCount(rawCount) {
    const count = Number(rawCount);

    if (Number.isNaN(count)) throw new Error(ERROR_MESSAGES.count.number);
    if (count <= 0) throw new Error(ERROR_MESSAGES.count.positiveNumber);
    if (!Number.isInteger(count)) throw new Error(ERROR_MESSAGES.count.integer);
  }
}
