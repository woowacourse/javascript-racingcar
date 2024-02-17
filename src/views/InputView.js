import { INPUT_INFO } from '../constants/message';
import readLineAsync from '../utils/readLineAsync';

const InputView = {
  async readCarNames() {
    const inputValue = await readLineAsync(INPUT_INFO.CAR_NAME);
    return inputValue;
  },

  async readRoundCount() {
    const inputValue = await readLineAsync(INPUT_INFO.ROUNT_COUNT);
    return inputValue;
  },
};

export default InputView;
