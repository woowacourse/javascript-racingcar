import { CONSOLE_MESSAGE } from '../constant/message.js';
import { readLineAsync } from './readLineAsync.js';

class InputView {
  static async inputCarName() {
    return await readLineAsync(CONSOLE_MESSAGE.carNamesInput);
  }

  static async inputTryCount() {
    return await readLineAsync(CONSOLE_MESSAGE.tryCountInput);
  }
}

export default InputView;
