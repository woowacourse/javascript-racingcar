const IO = require('../utils/IO.js');
const { MESSAGE } = require('../data/constants.js');

const InputView = {
  readCarNames(processInputCarNames) {
    IO.read(MESSAGE.CAR_NAME_INPUT, processInputCarNames);
  },

  readTryCount(processInputTryCount) {
    IO.read(MESSAGE.TRY_COUNT_INPUT, processInputTryCount);
  },
};

module.exports = InputView;
