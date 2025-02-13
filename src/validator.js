import { ERROR_MESSAGES } from './helpers/constants.js';

export default class Validator {
  static validateCarName(rawName) {
    const nameList = rawName.split(',');
    for (const name of nameList) {
      if (name.length > 5 || name.length === 0)
        throw new Error(ERROR_MESSAGES.carName);
    }
  }

  static validateCount(rawCount) {
    const count = Number(rawCount);
    if (Number.isNaN(count)) throw new Error(ERROR_MESSAGES.countNotANumber);
    if (count <= 0) throw new Error(ERROR_MESSAGES.countNotPositive);
  }
}
