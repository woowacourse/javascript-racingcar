import { INPUT_MESSSAGES } from '../constant/messages.js';
import readLineAsync from '../utils/readLineAsync.js';
import splitByDelimiter from '../utils/splitByDelimiter.js';
import Validator from '../utils/validator.js';

const InputView = {
  async readCarNames() {
    const input = await readLineAsync(INPUT_MESSSAGES.carNames);
    const splitCarNames = splitByDelimiter(input);

    Validator.carNames(splitCarNames);
    return splitCarNames;
  },

  async readMoveCount() {
    const input = await readLineAsync(INPUT_MESSSAGES.moveCount);

    Validator.tryCount(input);
    return Number(input);
  },
};

export default InputView;
