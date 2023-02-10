const Console = require('../lib/Console.js');
const { MESSAGE } = require('../lib/Constant.js');

const InputView = {
  readCarName() {
    return new Promise((resolve) => {
      Console.readLine(MESSAGE.input.carName, (carNames) => {
        resolve(carNames);
      });
    });
  },

  async readTryCount(callback) {
    return new Promise((resolve) => {
      Console.readLine(MESSAGE.input.tryCount, (tryCount) => {
        resolve(tryCount);
      });
    });
  },
};

module.exports = InputView;
