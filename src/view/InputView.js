const { INPUT_MESSSAGES } = require('../constant/messages.js');
const readLineAsync = require('../utils/readLineAsync.js');
const splitByDelimiter = require('../utils/splitByDelimiter.js');
const Validator = require('../utils/validator.js');
const OutputView = require('./OutputView.js');

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

module.exports = InputView;
