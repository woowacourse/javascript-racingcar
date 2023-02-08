// const Console  = require('./utils/readLine');

const GAME_MESSAGE = require('../constants');
const Console = require('../utils/readLine');

class InputView {
  static readCarName(callback) {
    Console.readLine(GAME_MESSAGE.askCarName, callback);
  }
}
module.exports = InputView;
