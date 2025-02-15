import { INPUT_MESSAGE } from '../constants/message.js';
import { readLineAsync } from '../utils/readLineAsync.js';

class InputView {
  static async inputCarName() {
    return await readLineAsync(INPUT_MESSAGE.CAR_NAME);
  }

  static async inputTryCount() {
    return await readLineAsync(INPUT_MESSAGE.TRY_COUNT);
  }
}

export default InputView;
