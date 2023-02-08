const Console = require('../utils/console');
const { OUTPUT_MESSAGE } = require('../constants/message');

const OutputView = {
  printResultTitle() {
    Console.print(OUTPUT_MESSAGE.resultTitle);
  },

  printCars(cars) {
    cars.forEach((value, key) => {
      Console.print(
        `${key}${
          OUTPUT_MESSAGE.resultSeparator
        }${OUTPUT_MESSAGE.distance.repeat(value)}`
      );
    });
    Console.print('');
  },

  printWinner(winner) {
    Console.print(
      `${winner.join(OUTPUT_MESSAGE.winnerSeparator)}${OUTPUT_MESSAGE.winner}`
    );
  },

  printError(msg) {
    Console.print(msg);
  },
};

module.exports = OutputView;
