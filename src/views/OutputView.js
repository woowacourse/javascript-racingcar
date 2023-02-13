const Console = require('../utils/Console');
const { OUTPUT_MESSAGE } = require('../constants/message');

const OutputView = {
  printResultTitle() {
    Console.print(OUTPUT_MESSAGE.RESULT_TITLE);
  },

  printCars(cars) {
    cars.forEach(({ distance, name }) => {
      Console.print(OUTPUT_MESSAGE.RESULT(name, distance));
    });
    Console.print('');
  },

  printWinner(winner) {
    Console.print(OUTPUT_MESSAGE.WINNER(winner));
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

module.exports = OutputView;
