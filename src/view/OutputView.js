import Console from '../utils/Console.js';
import constants from '../utils/constants.js';

const OutputView = {
  printEmptyLine() {
    Console.print(constants.EMPTY_LINE);
  },

  printResult() {
    Console.print(constants.EMPTY_LINE);
    Console.print(constants.RESULT_TITLE);
  },

  printWinners(winners) {
    Console.print(`${winners.join(', ')}${constants.IS_WINNERS}`);
  },

  printError(error) {
    Console.print(error.message);
  },

  printCar(name, pos) {
    let result = `${name} : `;
    result += new Array(pos).fill('-').join('');
    Console.print(result);
  },
};

export default OutputView;
