const Console = require('../utils/Console');
const { MESSAGE } = require('../constants');

const InputView = {
  readCarName(callback) {
    Console.readLine(MESSAGE.GET_CAR_NAME, callback);
  },

  readTryCount(callback) {
    Console.readLine(MESSAGE.GET_TRY_COUNT, callback);
  },
};

module.exports = InputView;
