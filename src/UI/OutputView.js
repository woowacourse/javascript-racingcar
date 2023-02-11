const Console = require('./Console');
const { Messages } = require('../Config');

const OutputView = {
  printResult(gameStatus) {
    Object.entries(gameStatus).forEach(([carName, position]) => {
      Console.print(`${carName} : ${new Array(position).fill(Messages.MOVING_TRACE).join('')}`);
    });
    Console.print('');
  },

  printResultMessage() {
    Console.print(Messages.RESULT);
  },

  printWinners(winners) {
    Console.print(`${winners.join(Messages.WINNER_SEPARATOR)}${Messages.PRINT_WINNER}`);
  },
};

module.exports = OutputView;
