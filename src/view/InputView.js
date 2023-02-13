const { INPUT_MESSAGE } = require('../constant/message');
const Console = require('../util/console');

const InputView = {
  readCarName(callback) {
    Console.read(INPUT_MESSAGE.CAR_NAME, callback);
  },

  readMovingCount(callback) {
    Console.read(INPUT_MESSAGE.MOVING_COUNT, callback);
  },
};

module.exports = InputView;
