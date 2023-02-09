const Console = require('../lib/console');
const { OUTPUT_MESSAGE } = require('../constants/message');

const OutputView = {
  printResultTitle() {
    Console.print(OUTPUT_MESSAGE.resultTitle);
  },

  printCars(cars) {
    cars.forEach((distance, name) => {
      Console.print(OUTPUT_MESSAGE.result(name, distance));
    });
    Console.print('');
  },

  printWinner(winner) {
    Console.print(OUTPUT_MESSAGE.winner(winner));
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

module.exports = OutputView;
