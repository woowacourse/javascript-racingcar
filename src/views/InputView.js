import { INPUT_MESSAGES } from '../helpers/constants.js';
import { readLineAsync, retryUntilSuccess } from '../helpers/utils.js';
import Validator from '../validator.js';

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
