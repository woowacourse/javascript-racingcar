import { InputValidator } from '../helpers/index.js';
import { INPUT_MESSAGES } from '../lib/constants.js';
import { readLineAsync, retryUntilSuccess } from '../lib/utils.js';

export default class InputView {
  static async getNames() {
    return retryUntilSuccess(async () => {
      const rawName = await readLineAsync(INPUT_MESSAGES.carName);
      InputValidator.validateCarName(rawName);

      return rawName.split(',');
    });
  }

  static async getCount() {
    return retryUntilSuccess(async () => {
      const rawCount = await readLineAsync(INPUT_MESSAGES.count);
      InputValidator.validateCount(rawCount);

      return Number(rawCount);
    });
  }
}
