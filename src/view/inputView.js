const GAME_MESSAGE = require('../constants');
const Console = require('../utils/Console');

class InputView {
  static readCarName(callback) {
    Console.readLine(GAME_MESSAGE.askCarName, callback);
  }

  static readAttempts(callback) {
    Console.readLine(GAME_MESSAGE.askTryCount, callback);
  }
}
module.exports = InputView;
