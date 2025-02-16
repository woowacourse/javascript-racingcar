import { PROMPT } from '../constants/message.js';
import readLineAsync from '../utils/readLineAsync.js';

class InputView {
  async getCarNames() {
    return await readLineAsync(PROMPT.GET_CAR_NAMES);
  }

  async getTryCount() {
    return await readLineAsync(PROMPT.GET_TRY_COUNT);
  }
}

export default InputView;
