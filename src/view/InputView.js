import { MESSAGE } from '../constants/System.js';
import readLineAsync from '../utils/ReadLine.js';

const InputView = {
  async readCarNames() {
    const input = await readLineAsync(MESSAGE.INPUT_CAR_NAME);
    return input;
  },

  async readTryCount() {
    const input = await readLineAsync(MESSAGE.INPUT_TRY_COUNT);
    return input;
  },
};
export default InputView;
