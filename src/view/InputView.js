import { INPUTS } from '../statics/messages';
import Console from '../utils/Console';

class InputView {
  static async readCarsName() {
    const input = await Console.readLineAsync(INPUTS.carsName);
    return input;
  }

  static async readAttemptNum() {
    const input = await Console.readLineAsync(INPUTS.attemptNum);
    return input;
  }
}

export default InputView;
