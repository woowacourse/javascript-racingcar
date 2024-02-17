import Console from '../utils/Console';

import { INPUTS } from '../statics/messages';

const InputView = {
  async readCarsName() {
    const input = await Console.readLineAsync(INPUTS.carsName);
    return input;
  },

  async readAttemptNum() {
    const input = await Console.readLineAsync(INPUTS.attemptNum);
    return input;
  },
};

export default InputView;
