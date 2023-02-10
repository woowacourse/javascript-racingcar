const Console = require('../utils/Console');
const { REQUEST_MESSAGE } = require('../constants/Constant');

const InputView = {
  readCarNames(callback) {
    Console.question(REQUEST_MESSAGE.carNames, callback);
  },

  readRaceRound(callback) {
    Console.question(REQUEST_MESSAGE.raceRound, callback);
  },
};

module.exports = InputView;
