import { InputValidator } from '../helpers/index.js';
import { INPUT_MESSAGES } from '../lib/constants.js';
import { readLineAsync, retryUntilSuccess } from '../lib/utils.js';

export default class InputView {
  static async getNames() {
    return retryUntilSuccess(async () => {
      const rawName = await readLineAsync(INPUT_MESSAGES.carName);
      const names = rawName.split(',');
      InputValidator.validateCarName(names);

      return names;
    });
  }

  static async getCount() {
    return retryUntilSuccess(async () => {
      const rawCount = await readLineAsync(INPUT_MESSAGES.count);
      const count = Number(rawCount);
      InputValidator.validateCount(count);

      return count;
    });
  }
}
