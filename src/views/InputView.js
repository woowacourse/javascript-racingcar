const { INPUT_MESSAGE } = require('../constants/message');
const Console = require('../utils/console');

const InputView = {
  readCarName(callback) {
    Console.read(INPUT_MESSAGE.carName, callback);
  },

  readMovingCount(callback) {
    Console.read(INPUT_MESSAGE.movingCount, callback);
  },
};

module.exports = InputView;
