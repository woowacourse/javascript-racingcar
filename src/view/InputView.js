const { INPUT_MESSAGE } = require('../constants');
const { Console } = require('../utils');

const InputView = {
  readCarName(callback) {
    Console.read(INPUT_MESSAGE.CAR_NAMES, callback);
  },

  readMovingCount(callback) {
    Console.read(INPUT_MESSAGE.MOVING_COUNT, callback);
  },
};

module.exports = InputView;
