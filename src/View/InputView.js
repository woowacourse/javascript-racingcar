const Console = require('../Utils/Console');
const RACE_MESSAGE = require('../Constant/RaceMessage');

const InputView = {
  getUserInput(question, callback, redirect) {
    Console.readLine(question, input => {
      try {
        callback(input);
      } catch (err) {
        Console.print(err);
        redirect(callback);
      }
    });
  },

  readCarName(callback) {
    this.getUserInput(
      RACE_MESSAGE.INPUT_CAR_NAME,
      callback,
      this.readCarName.bind(this),
    );
  },

  readTryCount(callback) {
    this.getUserInput(
      RACE_MESSAGE.INPUT_TRY_COUNT,
      callback,
      this.readTryCount.bind(this),
    );
  },
};

module.exports = InputView;
