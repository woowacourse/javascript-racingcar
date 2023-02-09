const Console = require("../lib/Console.js");
const { MESSAGE } = require("../lib/Constant.js");

const InputView = {
  readCarName(callback) {
    Console.readLine(MESSAGE.input.carName, callback);
  },

  readTryCount(callback) {
    Console.readLine(MESSAGE.input.tryCount, callback);
  },
};

module.exports = InputView;
