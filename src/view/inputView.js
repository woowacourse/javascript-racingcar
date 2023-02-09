const Console = require('../utils/Console');
const { errorHandler } = require('../utils');
const { GAME_MESSAGE, GAME_STRING } = require('../constants');
const Validation = require('../Validation');

class InputView {
  static readCarName(callback) {
    Console.readLine(GAME_MESSAGE.askCarName, (nameInput) => {
      const carNames = nameInput.split(GAME_STRING.nameSplit);
      const isNormal = errorHandler(Validation.carName, carNames);
      if (isNormal) return callback(carNames);
      return InputView.readCarName(callback);
    });
  }

  static readAttempts(callback) {
    Console.readLine(GAME_MESSAGE.askAttempts, (attemptInput) => {
      const attempt = Number(attemptInput);
      const isNormal = errorHandler(Validation.attempt, attempt);
      if (isNormal) return callback(attempt);
      return InputView.readAttempts(callback);
    });
  }
}
module.exports = InputView;
