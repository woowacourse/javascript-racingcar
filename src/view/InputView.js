const { ConsoleMessage, Readline } = require("../constants/Constants.js");
const Exception = require("../utils/Exception.js");

const InputView = {
  readCarNames(callback) {
    Readline.question(ConsoleMessage.CAR_NAME, (input) => {
      try {
        const cars = input.split(",");
        Exception.checkCarInput(cars);
        callback(cars);
      } catch (e) {
        console.log(e.message);
        this.readCarNames(callback.bind(this));
      }
    });
  },

  readMoveCount(callback) {
    Readline.question(ConsoleMessage.MOVE_COUNT, (input) => {
      try {
        Exception.checkMoveCountInput(input);
        callback(input);
      } catch (e) {
        console.log(e.message);
        this.readMoveCount(callback.bind(this));
      }
    });
  },
};

module.exports = InputView;
