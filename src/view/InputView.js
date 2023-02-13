const Console = require('../util/Console.js');
const { MESSAGE } = require('../util/Constant.js');

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
