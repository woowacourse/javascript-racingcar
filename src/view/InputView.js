import { INPUT_MESSAGES } from '../lib/constants.js';
import { readLineAsync, retryUntilSuccess } from '../lib/utils.js';
import Validator from './Validator.js';

export default class InputView {
  static async getNames() {
    return retryUntilSuccess(async () => {
      const rawName = await readLineAsync(INPUT_MESSAGES.carName);
      Validator.validateCarName(rawName);

      return rawName.split(',');
    });
  }

  static async getCount() {
    return retryUntilSuccess(async () => {
      const rawCount = await readLineAsync(INPUT_MESSAGES.count);
      Validator.validateCount(rawCount);

      return Number(rawCount);
    });
  }
}
