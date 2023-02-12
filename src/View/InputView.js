const Console = require("../utils/Console");
const { MESSAGE } = require("../constants");

const InputView = {
  readCarName(callback) {
    Console.readLine(MESSAGE.GET_CAR_NAME, callback);
  },

  readCountOfTrial(callback) {
    Console.readLine(MESSAGE.GET_COUNT_OF_TRIAL, callback);
  },
};

module.exports = InputView;
