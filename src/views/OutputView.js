const Console = require('../utils/console');
const { OUTPUT_MESSAGE } = require('../constants/message');

const OutputView = {
  printResultTitle() {
    Console.print(OUTPUT_MESSAGE.resultTitle);
  },

  printCars(cars) {
    cars.forEach((distance, name) => {
      Console.print(`${name} : ${OUTPUT_MESSAGE.distance.repeat(distance)}`);
    });
    Console.print('');
  },

  printWinner(winner) {
    Console.print(`${winner.join(', ')}${OUTPUT_MESSAGE.winner}`);
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

module.exports = OutputView;
