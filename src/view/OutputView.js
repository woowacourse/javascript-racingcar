const Console = require('../utils/Console');
const { EMPTY_LINE, RESULT_TITLE, IS_WINNERS } = require('../constants/message');

const OutputView = {
  printEmptyLine() {
    Console.print(EMPTY_LINE);
  },

  printResult() {
    Console.print(EMPTY_LINE);
    Console.print(RESULT_TITLE);
  },

  printWinners(winners) {
    Console.print(`${winners.join(', ')}${IS_WINNERS}`);
  },

  printError(error) {
    Console.print(error.message);
  },

  printCar(name, position) {
    Console.print(`${name} : ${"-".repeat(position)}`);
  },
};

module.exports = OutputView;
