const Console = require('../utils/console');
const { OUTPUT_MESSAGE, OUTPUT_MESSAGE_METHOD } = require('../constants');

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
    Console.print(errorMessage);
  },
};

module.exports = OutputView;
