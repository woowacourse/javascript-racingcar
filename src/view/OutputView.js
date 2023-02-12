const { OUTPUT_MESSAGE, OUTPUT_MESSAGE_METHOD, ERROR_MESSAGE } = require('../constants');
const { Console } = require('../utils');

const OutputView = {
  printResultTitle() {
    Console.print(OUTPUT_MESSAGE.RESULT_TITLE);
  },

  printCars(cars) {
    cars.forEach((distance, name) => {
      Console.print(OUTPUT_MESSAGE_METHOD.CAR_RESULT(name, distance));
    });
    Console.print('');
  },

  printWinner(winner) {
    Console.print(OUTPUT_MESSAGE_METHOD.WINNER(winner));
  },

  printError(errorMessage) {
    Console.print(ERROR_MESSAGE.PREFIX + errorMessage);
  },
};

module.exports = OutputView;
