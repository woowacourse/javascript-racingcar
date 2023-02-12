const { ConsoleMessage, RL, StaticValue } = require('../constants/constants');
const Exception = require('../utils/Exception');

const InputView = {
  readCarNames(callback) {
    RL.question(ConsoleMessage.CAR_NAME, (input) => {
      try {
        const CARS = input.split(StaticValue.CAR_NAME_INPUT_SEPERATOR);
        Exception.checkCarInput(CARS);
        callback(CARS);
      } catch (e) {
        console.log(e.message);
        this.readCarNames(callback.bind(this));
      }
    });
  },

  readMoveCount(callback) {
    RL.question(ConsoleMessage.MOVE_COUNT, (input) => {
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
