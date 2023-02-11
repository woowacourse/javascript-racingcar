const Console = require('../utils/console');
const { OUTPUT_MESSAGE } = require('../constants/message');

const OutputView = {
  printResultTitle() {
    Console.print(OUTPUT_MESSAGE.RESULT_TITLE);
  },

  printCars(cars) {
    cars.forEach((distance, name) => {
      Console.print(`${name} : ${OUTPUT_MESSAGE.DISTANCE.repeat(distance)}`);
    });
    Console.print('');
  },

  printWinner(winner) {
    Console.print(`${winner.join(', ')}${OUTPUT_MESSAGE.WINNER}`);
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

module.exports = OutputView;
