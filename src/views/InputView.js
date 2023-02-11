const readLine = require('../utils/readLine');
const { INPUT_MESSAGE } = require('../utils/constants');

const InputView = {
  readCarNames() {
    return new Promise((resolve) => {
      readLine.question(INPUT_MESSAGE.ENTER_CAR_NAMES, (userInput) => {
        resolve(userInput);
      });
    });
  },

  readTryCount() {
    return new Promise((resolve) => {
      readLine.question(INPUT_MESSAGE.ENTER_TRY_COUNT, (userInput) => {
        resolve(userInput);
      });
    });
  },
};

module.exports = InputView;
