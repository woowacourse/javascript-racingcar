import { INPUT_MESSSAGES } from '../constant/messages.js';
import readLineAsync from '../utils/readLineAsync.js';
import splitByDelimiter from '../utils/splitByDelimiter.js';

const InputView = {
  async readCarNames() {
    const input = await readLineAsync(INPUT_MESSSAGES.carNames);
    const splitCarNames = splitByDelimiter(input);

    // TODO: 유효성 검사
    return splitCarNames;
  },

  async readMoveCount() {
    const input = await readLineAsync(INPUT_MESSSAGES.moveCount);

    // TODO: 유효성 검사
    return Number(input);
  },
};

export default InputView;
