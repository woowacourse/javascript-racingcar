const { GAME_MESSAGE } = require('../constants');
const { errorHandler } = require('../utils');
const Console = require('../utils/Console');
const Validation = require('../Validation');

class InputView {
  static readCarName(callback) {
    Console.readLine(GAME_MESSAGE.askCarName, (nameInput) => {
      const carNames = nameInput.split(',');
      const isNormal = errorHandler(Validation.carName, carNames);
      if (isNormal) return callback(carNames);
      return InputView.readCarName(callback);
    });
  }

  static readAttempts(callback) {
    Console.readLine(GAME_MESSAGE.askAttempts, (attemptInput) => {
      const isNormal = errorHandler(Validation.attempt, attemptInput);
      if (isNormal) return callback(attemptInput);
      return InputView.readAttempts(callback);
    });
  }
}
module.exports = InputView;
