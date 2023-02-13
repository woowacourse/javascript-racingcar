const { INPUT_MESSAGE } = require('../constants/message');
const Console = require('../lib/console');

const InputView = {
  readCarName(callback) {
    Console.read(INPUT_MESSAGE.CAR_NAME, callback);
  },

  readMovingCount(callback) {
    Console.read(INPUT_MESSAGE.MOVING_COUNT, callback);
  },
};

module.exports = InputView;
