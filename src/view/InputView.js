import { SYMBOLS } from '../statics/constants';
import { INPUT_MESSAGES } from '../statics/messages';
import Console from '../utils/Console';

class InputView {
  static async readCarsName() {
    const input = await Console.readLineAsync(`${INPUT_MESSAGES.carsName}${SYMBOLS.newLine}`);
    return input;
  }

  static async readAttemptNum() {
    const input = await Console.readLineAsync(`${INPUT_MESSAGES.attemptNum}${SYMBOLS.newLine}`);
    return input;
  }
}

export default InputView;
