const Console = require("../util/Console.js");
const { MESSAGE } = require("../util/Constant.js");

const InputView = {
  readCarName(callback) {
    Console.readLine(MESSAGE.input.carName, callback);
  },

  readTryCount(callback) {
    Console.readLine(MESSAGE.input.tryCount, callback);
  },
};

module.exports = InputView;
