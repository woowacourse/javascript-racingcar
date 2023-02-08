const IO = require('../utils/IO.js');
const { MESSAGE } = require('../data/constants.js');

const InputView = {
  readCarName(callback) {
    IO.read(MESSAGE.CAR_NAME_INPUT, callback);
  },

  readTryCount(callback) {
    IO.read(MESSAGE.TRY_COUNT_INPUT, callback);
  },
};

module.exports = InputView;
