import { INPUT_INFO } from '../constants/message';
import { SYMBOLS } from '../constants/setting';
import readLineAsync from '../utils/readLineAsync';

const InputView = {
  async readCarNames() {
    const inputValue = await readLineAsync(`${INPUT_INFO.CAR_NAME}${SYMBOLS.NEW_LINE}`);
    return inputValue;
  },

  async readRoundCount() {
    const inputValue = await readLineAsync(`${INPUT_INFO.ROUNT_COUNT}${SYMBOLS.NEW_LINE}`);
    return inputValue;
  },
};

export default InputView;
