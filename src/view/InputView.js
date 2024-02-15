import { INPUT_MESSAGES } from '../statics/messages';
import Console from '../utils/Console';

class InputView {
  static async readCarsName() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.carsName);
    return input;
  }

  static async readAttemptNum() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.attemptNum);
    return input;
  }
}

export default InputView;
