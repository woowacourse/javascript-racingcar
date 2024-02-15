import { INPUT_MESSSAGES } from '../constant/messages.js';
import readLineAsync from '../utils/readLineAsync.js';
import splitByDelimiter from '../utils/splitByDelimiter.js';
import Validator from '../utils/validator.js';
import OutputView from './OutputView.js';

const InputView = {
  async readCarNames() {
    try {
      const input = await readLineAsync(INPUT_MESSSAGES.carNames);
      const splitCarNames = splitByDelimiter(input);

      Validator.carNames(splitCarNames);
      return splitCarNames;
    } catch (error) {
      OutputView.print(error.message);
      return this.readCarNames();
    }
  },

  async readMoveCount() {
    try {
      const input = await readLineAsync(INPUT_MESSSAGES.moveCount);

      Validator.tryCount(input);
      return Number(input);
    } catch (error) {
      OutputView.print(error.message);
      return this.readMoveCount();
    }
  },
};

export default InputView;
